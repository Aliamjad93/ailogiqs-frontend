/**
 * BeeLens — "Bee virus detection" service page content.
 *
 * Copy lives here rather than inline in the JSX so the page stays a layout and
 * this file stays the single place a non-developer has to touch to change a
 * word. It mirrors the client's "Bee Virus Detection Infographic" PDF, which is
 * the source of truth for every string below.
 *
 * Kept as plain data (no JSX) so it can be imported by the page, by a future
 * OG-image builder or by a sitemap without pulling React in.
 */

/** Product name, used in the eyebrow, the metadata and the breadcrumb. */
export const BRAND = "BeeLens";

/** Canonical route. The Projects card on /projects links here. */
export const HREF = "/projects/bee-virus-detection";

export const hero = {
  eyebrow: "AI video hive diagnostics",
  /*
    Split so the second half can be accented amber without a <span> in the data
    (the page renders `lead` in ink and `accent` in amber).
  */
  titleLead: "See Varroa and viruses ",
  titleAccent: "before they spread.",
  intro:
    "Upload a photo or video of your bees. BeeLens checks it for Varroa mites and virus symptoms — and flags what it finds in seconds.",
  cta: { label: "Book a demo", href: "/contact" },
  ctaGhost: { label: "See how it works", href: "#how-it-works" },
  checks: ["No bees sacrificed", "No lab wait", "Varroa + viruses"],
  /*
    The hero artwork is a single exported composition
    (public/assets/img/custom/bee-hero.webp) — the device, the detection boxes
    and the two read-outs are baked into the image, so the "Mite load" and
    "Virus detected" strings live in that export, not here. Changing them means
    a new export; see the page's hero block for the alt text that describes it.
  */
};

/*
  "Photo in, diagnosis out" — the band directly under the hero.

  Three beats: the frame being uploaded, the dashed join, and the report that
  comes back. The report card is built from markup rather than supplied as
  artwork, so its wording is real text: selectable, translatable, indexable, and
  editable without a new export. The phone is a HiveScan, which keeps it crisp
  and lets the finding box move without re-drawing anything.
*/
export const diagnosis = {
  intro: {
    eyebrow: "BEELENS BY AILOGIQS · AI HIVE DIAGNOSTICS",
    titleLead: "Spot Varroa and bee viruses from a ",
    titleAccent: "photo or video.",
    lead: "Upload a photo or short video of your bees or brood frame. Our AI checks every image and video frame for Varroa mites and the visible signs of viral infection — and tells you what to do next.",
  },
  clip: { file: "hive-video.mp4", status: "Analyzing…" },
  card: {
    eyebrow: "Diagnosis report",
    meta: "Live scan",
    tag: "Virus detected",
    title: "Deformed Wing Virus",
    subtitle: "Likely DWV · high confidence",
    signs: {
      label: "Signs found",
      text: "Shrivelled, crumpled wings · shortened abdomen",
    },
    risk: {
      label: "Linked risk",
      text: "Often spread by Varroa mites — check mite load",
    },
    step: {
      label: "Recommended next step",
      text: "Run a mite count, isolate affected frames, and re-scan the colony after treatment to track progress.",
    },
  },
};

/*
  No eyebrow here: the heading says "How it works", and the reference does not
  label the band a second time above it.
*/
export const steps = {
  title: "How it works",
  items: [
    {
      n: "01",
      icon: "camera",
      title: "Capture",
      text: "Take a photo or film a short video of bees or a brood frame.",
    },
    {
      n: "02",
      icon: "upload",
      title: "Upload",
      text: "Upload the photo or clip in the app — tagged to the hive it came from.",
    },
    {
      n: "03",
      icon: "cpu",
      title: "AI analysis",
      text: "Our model checks every image and video frame for Varroa mites and visual virus symptoms.",
    },
    {
      n: "04",
      icon: "report",
      title: "Diagnosis & action",
      text: "Get the likely virus, a confidence score and clear next steps in seconds.",
    },
  ],
};

/*
  "What it looks for" — the visible-signs board, directly under How it works.

  Deliberately a narrower list than the cream "What BeeLens detects" band below:
  that one is the full detection set including Varroa and its illustrations,
  this one is the four viruses named on their visible signs alone, which is what
  a beekeeper actually scans a frame for.
*/
export const symptoms = {
  title: "What it looks for",
  items: [
    {
      code: "DWV",
      title: "Deformed Wing Virus",
      text: "Crumpled or stubby wings on newly emerged bees.",
    },
    {
      code: "SBV",
      title: "Sacbrood Virus",
      text: "Larvae turned into fluid-filled sacs with darkened, raised heads.",
    },
    {
      code: "CBPV",
      title: "Chronic Bee Paralysis",
      text: "Hairless, shiny black bees, often trembling at the entrance.",
    },
    {
      code: "BQCV",
      title: "Black Queen Cell Virus",
      text: "Queen cells with dark brown to black walls.",
    },
  ],
};

export const varroa = {
  eyebrow: "Varroa detection",
  title: "Every mite counted. No alcohol wash.",
  intro:
    "The AI finds Varroa mites on adult bees and in open brood cells, then estimates the colony's mite load from one uploaded photo or video.",
  clip: { file: "brood-frame.mp4", status: "Mites detected" },
  items: [
    {
      title: "Mites on adult bees",
      text: "Located and boxed on each bee.",
    },
    {
      title: "Mites in brood",
      text: "Spotted in open cells on the frame.",
    },
    {
      title: "Mite load estimate",
      text: "Colony mite level, per hive.",
    },
    {
      title: "Treatment alerts",
      text: "Flags hives that need action now.",
    },
  ],
};

export const threats = {
  eyebrow: "What BeeLens detects",
  title: "One photo or video. Varroa and viruses, checked.",
  intro:
    "The AI reads the visible signs of Varroa and the most damaging honey bee viruses — and tells you which one it sees.",
  /* `art` keys map to the illustrations in BeeKit's ThreatArt. */
  items: [
    {
      code: "Pest",
      art: "varroa",
      title: "Varroa mites",
      text: "Mites on bees and in brood, plus a mite load estimate.",
      feature: true,
    },
    {
      code: "DWV",
      art: "wing",
      title: "Deformed Wing Virus",
      text: "Crumpled, stubby wings on young bees.",
    },
    {
      code: "SBV",
      art: "sacbrood",
      title: "Sacbrood Virus",
      text: "Fluid-filled larvae with dark, raised heads.",
    },
    {
      code: "CBPV",
      art: "paralysis",
      title: "Chronic Bee Paralysis",
      text: "Hairless, shiny black and trembling bees.",
    },
    {
      code: "BQCV",
      art: "queencell",
      title: "Black Queen Cell Virus",
      text: "Queen cells with dark brown to black walls.",
    },
  ],
};

export const benefits = {
  eyebrow: "Why beekeepers choose BeeLens",
  title: "Healthier hives, fewer losses, less guesswork.",
  cta: { label: "Book a demo", href: "/contact" },
  items: [
    {
      icon: "search",
      title: "Catch it early",
      text: "Spot rising mite loads and first virus signs before the colony declines.",
    },
    {
      icon: "clock",
      title: "Answers in seconds",
      text: "No lab, no waiting. Decide during the same inspection.",
    },
    {
      icon: "heart",
      title: "No bees sacrificed",
      text: "A photo or short video replaces the alcohol wash. Your bees stay in the hive.",
    },
    {
      icon: "flask",
      title: "Treat only when needed",
      text: "Target the hives that need it and cut chemical use and cost.",
    },
    {
      icon: "users",
      title: "Anyone can run it",
      text: "No expert eye needed. Consistent results from every team member.",
    },
    {
      icon: "chart",
      title: "Full hive history",
      text: "Every scan saved by hive and date, so trends are clear at a glance.",
    },
  ],
};

export const closing = {
  title: "Healthier hives start with early detection.",
  text: "Send us a hive photo or a short clip and we will run it through BeeLens live on the call.",
  cta: { label: "Book a demo", href: "/contact" },
};

export const faq = {
  eyebrow: "Support",
  title: "Frequently asked",
  accent: "questions",
  intro: "What beekeepers ask before their first scan.",
  items: [
    {
      q: "What do I need to take a scan?",
      a: "A phone. Either a close photo of the bees on a frame, or a short video of the brood frame. The app tags each upload to the hive it came from so the history stays per-colony.",
    },
    {
      q: "Does it replace the alcohol wash?",
      a: "For routine monitoring, yes — a photo or short video gives you the mite load estimate without sacrificing bees. Confirm any treatment decision with your own inspection before you act on it.",
    },
    {
      q: "How accurate is the virus detection?",
      a: "BeeLens reports the visible signs it can see and a confidence score for each. Deformed wing, sacbrood, chronic paralysis and black queen cell all have recognisable visual markers; a low-confidence result means the frame should be re-shot or checked by hand.",
    },
    {
      q: "Can I track a hive over time?",
      a: "Every scan is saved by hive and date, so you can watch a mite load climb across a season and see whether a treatment actually worked.",
    },
  ],
};

/*
  The three BeeLens clips, keyed by the band they sit in.

  These are the client's own 10-second BeeLens brand animations, copied
  verbatim from BeeLens_videos_with_music (three shapes of each animation).
  No re-encode: the masters are H.264/AAC, ~0.8–1.5 MB each, and already carry
  the client's music. `width`/`height` are the real intrinsic dimensions —
  BeeVideo derives the reserved aspect ratio from them, so a wrong pair is a
  layout shift, not a cosmetic detail. `label` is the video's accessible name;
  keep it in step with the cut it describes.

  How it works runs the SQUARE cut: beside four step cards on the wide-screen
  band, a 1:1 frame can match their two-row height — the 9:16 portrait ran 40%
  taller than the cards and left the band ragged. The other two slots take the
  landscape cuts. The CTA band is word-only now: a third walkthrough would have
  closed the page on the same story, so the portrait cuts and their poster
  files stay on disk — in public/assets/video/bee and public/assets/img/custom
  — without a slot to call them.
*/
export const videos = {
  howItWorks: {
    src: "/assets/video/bee/bee-how-it-works-square.mp4",
    poster: "/assets/img/custom/bee-video-how-it-works-square.webp",
    width: 1080,
    height: 1080,
    label:
      "A BeeLens walkthrough: a hive video is uploaded, every frame is checked for Varroa mites and virus signs, and a diagnosis with next steps comes back",
  },
  varroa: {
    src: "/assets/video/bee/bee-varroa-detection.mp4",
    poster: "/assets/img/custom/bee-video-varroa.webp",
    width: 1920,
    height: 1080,
    label:
      "An uploaded brood-frame video under analysis: Varroa mites boxed on adult bees and in open brood cells, with a colony mite-load estimate of high",
  },
  whyChooseUs: {
    src: "/assets/video/bee/bee-why-choose-us.mp4",
    poster: "/assets/img/custom/bee-video-why-choose-us.webp",
    width: 1920,
    height: 1080,
    label:
      "Why beekeepers choose BeeLens: disease caught early, answers in seconds, no bees sacrificed, and treatment only when the hive needs it",
  },
};
