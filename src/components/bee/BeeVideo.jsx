/**
 * BeeVideo — the ambient BeeLens clip frame.
 *
 * Renders the client's 10-second BeeLens brand animations (the explainer cuts
 * in public/assets/video/bee/) with the same player as the sales-agent clips
 * on /projects/chatbot: the NATIVE controls, press-to-play.
 *
 * Why the simpler player: the pages now look consistent — every video on the
 * projects showcase works the same way. The parts that carry over from
 * AgentVideo:
 *
 *   controls    play/pause, scrub, volume and fullscreen from the browser,
 *               keyboard-accessible for free. No custom ribbon, no scrim.
 *   preload     "metadata" — enough to resolve the duration for the control
 *               bar without pulling the clip for visitors who never press
 *               play.
 *   poster      the still that fills the frame before playback, and the only
 *               thing shown at all if the browser never fetches the media.
 *   src         set directly rather than via <source>: one file, no fallback
 *               to negotiate.
 *   No `muted`  the cuts carry the client's music and the viewer chose to
 *               press play, so the sound is theirs to control from the same
 *               bar.
 *   loop        these are 10-second ambient loops, not 60-second recordings —
 *               left looping the brand cut, unlike the agent demo.
 *   playsInline without it iOS plays every clip fullscreen; invisible
 *               everywhere else.
 *
 * Deliberately NOT autoplaying anymore: what was an IntersectionObserver,
 * a visibilitychange pauser and a reduced-motion check is gone — with playback
 * left to the viewer there is nothing to override, so this stays a plain
 * server component, same as AgentVideo.
 *
 * The width/height + inline aspect-ratio pair is the same contract as
 * AgentVideo: the box is reserved from the clip's real dimensions from first
 * paint (a <video> takes its ratio from the POSTER until the first frame has
 * actually painted, so without it the layout would shift on play).
 */

export default function BeeVideo({ src, poster, label, width, height, className = "" }) {
  return (
    <div className={`bee-video${className ? ` ${className}` : ""}`}>
      <video
        className="bee-video-el"
        src={src}
        poster={poster}
        width={width}
        height={height}
        style={{ aspectRatio: `${width} / ${height}` }}
        controls
        preload="metadata"
        loop
        playsInline
        aria-label={label}
      />
    </div>
  );
}
