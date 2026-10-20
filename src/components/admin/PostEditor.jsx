"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * TipTap editor for article bodies.
 *
 * TipTap over Editor.js because:
 *   - it is a ProseMirror-based WYSIWYG editor, so what the author sees is what
 *     gets stored, with no separate "preview HTML" mode to keep in sync;
 *   - `editor.getHTML()` returns the exact shape the article page renders, and
 *     that shape is what src/lib/sanitize.js allows, so nothing the toolbar can
 *     produce gets stripped on save;
 *   - StarterKit already covers headings, lists, quotes and code, which is the
 *     whole requirement here. Editor.js is block-based and would need an extra
 *     layer to give inline formatting inside a paragraph.
 *
 * Kept visually plain on purpose: this is a tool, not a showcase.
 */
function buildExtensions(placeholder) {
  return [
    StarterKit.configure({
      heading: { levels: [2, 3, 4] },
      // TipTap emits <h1> for level 1; the content body has no h1 because the
      // page title already is one. Disallow it so headings stay semantic.
      codeBlock: {},
      // StarterKit bundles its own Link. Registering the standalone extension on
      // top of it gives the editor two extensions named "link", which TipTap warns
      // about and which can make link commands hit an arbitrary one of the two.
      // Disabling the bundled copy leaves a single Link, configured below.
      link: false,
    }),
    Placeholder.configure({ placeholder }),
    Link.configure({
      openOnClick: false,
      autolink: true,
      // Anything not http/https/mailto is rejected by the sanitiser on save, so
      // prevent it at the point of entry instead of silently dropping it later.
      protocols: ["http", "https", "mailto"],
      HTMLAttributes: { rel: "noopener noreferrer" },
    }),
    // The Image extension is deliberately absent. Registered, it accepts pasted
    // and dropped images and would happily insert a blob: or data: URL that no
    // longer resolves after a reload. With no image command in the toolbar and no
    // extension, in-body images cannot be created at all -- the cover upload is
    // the only way an image enters a post.
  ];
}

const TOOLBAR = [
  { id: "bold", label: "B", title: "Bold", style: { fontWeight: 800 } },
  { id: "italic", label: "I", title: "Italic", style: { fontStyle: "italic" } },
  { id: "h2", label: "H2", title: "Section heading" },
  { id: "h3", label: "H3", title: "Sub heading" },
  { id: "bulletList", label: "• List", title: "Bullet list" },
  { id: "orderedList", label: "1. List", title: "Numbered list" },
  { id: "blockquote", label: "”", title: "Quote" },
  { id: "code", label: "{ }", title: "Inline code" },
  { id: "link", label: "Link", title: "Add link" },
  // No image button: images are uploaded as the cover only. An in-body image
  // tool would take a URL, which is the thing the panel deliberately stopped
  // accepting -- it produces a broken image the moment the path is wrong.
  { id: "undo", label: "Undo", title: "Undo" },
  { id: "redo", label: "Redo", title: "Redo" },
];

export default function PostEditor({
  value,
  onChange,
  placeholder = "Write the article body here. Use H2 for section headings, lists for steps, and the quote block for pull quotes.",
  ariaLabel = "Article body",
}) {
  const [wordCount, setWordCount] = useState(0);
  const [readingMinutes, setReadingMinutes] = useState(1);

  // Kept in refs so onUpdate stays a stable closure. Declaring these inline
  // would rebuild the editor on every keystroke and lose the cursor position.
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const updateStats = useCallback((instance) => {
    const words = instance.getText().trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
    setReadingMinutes(Math.max(1, Math.round(words / 220)));
  }, []);

  const editor = useEditor({
    extensions: buildExtensions(placeholder),
    content: value || "",
    // Renders immediately on the server; TipTap needs the DOM to mount.
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "editor-surface",
        "aria-label": ariaLabel,
      },
    },
    onUpdate({ editor: instance }) {
      onChangeRef.current?.(instance.getHTML());
      updateStats(instance);
    },
  });

  useEffect(() => {
    if (editor) updateStats(editor);
  }, [editor, updateStats]);

  // Keep the editor in step when the form is reset or the post changes without
  // a remount. emitUpdate:false avoids feeding the change straight back.
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = value || "";
    if (current !== next) {
      editor.commands.setContent(next, { emitUpdate: false });
      updateStats(editor);
    }
  }, [value, editor, updateStats]);

  if (!editor) {
    return <div className="editor-loading">Loading editor…</div>;
  }

  const setLink = () => {
    const previous = editor.getAttributes("link").href || "";
    const url = window.prompt("Link URL (https://…)", previous);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const isActive = (id, attrs) =>
    id === "link"
      ? editor.isActive("link")
      : editor.isActive(id, attrs);

  return (
    <div className="editor-wrap">
      <div className="editor-toolbar" role="toolbar" aria-label="Formatting">
        {TOOLBAR.map((item, index) => {
          // Separator before the link group, where formatting ends and insert begins.
          const separator = index === 8 ? <span className="editor-sep" key="sep" /> : null;
          const active = isActive(item.id);
          const run = () => {
            switch (item.id) {
              case "h2":
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
              case "h3":
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                break;
              case "link":
                setLink();
                break;
              default:
                editor.chain().focus()[`toggle${item.id[0].toUpperCase()}${item.id.slice(1)}`]().run();
            }
          };
          return (
            <span key={item.id} style={{ display: "contents" }}>
              {separator}
              <button
                type="button"
                onClick={run}
                title={item.title}
                aria-label={item.title}
                aria-pressed={active}
                className={`editor-btn${active ? " is-active" : ""}`}
                style={item.style}
              >
                {item.label}
              </button>
            </span>
          );
        })}
        <span className="editor-stats">
          {wordCount} words · {readingMinutes} min read
        </span>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}