/**
 * The agent demo clip in the homepage's "AI sales agent" column.
 *
 * Deliberately NOT autoplaying. A 60-second screen recording that starts on its
 * own takes the choice away from the visitor, and it was also the only reason
 * this needed client-side JavaScript -- pausing on `prefers-reduced-motion` had
 * to happen from an effect, because `autoPlay` is a DOM attribute that CSS
 * cannot reach. With playback left to the viewer there is nothing to override,
 * so this is a plain server component again.
 *
 * The attributes it does carry:
 *
 *   controls   the native player, so play/pause, scrub and fullscreen are all
 *              available and keyboard-accessible for free.
 *   preload    "metadata" only. Enough to resolve the duration for the control
 *              bar without pulling 12 MB for a clip most visitors will not
 *              start. "none" would leave the bar blank.
 *   poster     the still that fills the column before playback, and the only
 *              thing shown at all if the browser never fetches the media.
 *   src        set directly rather than via <source>, because there is one file
 *              and no fallback format to negotiate.
 *
 * No `muted`: the clip carries an audio track and the viewer chose to press
 * play, so the sound is theirs to control from the same bar.
 */

/*
 * The clip's real dimensions, recorded once.
 *
 * These are load-bearing, not documentation. A <video> takes its intrinsic
 * aspect ratio from the POSTER until the first frame has actually painted,
 * regardless of the width/height attributes -- so with the 613x536 poster in
 * place the column reserved a landscape box, and the panel then snapped to
 * portrait on play: a ~470px layout shift mid-section. Declaring the ratio on
 * the element pins the box from first paint, and the attributes stay for the
 * pre-CSS case. Change the clip, change these.
 */
const WIDTH = 1080;
const HEIGHT = 1920;

export default function AgentVideo({ src, poster, label }) {
  return (
    <video
      className="aiq-agent-video"
      src={src}
      poster={poster}
      width={WIDTH}
      height={HEIGHT}
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      controls
      preload="metadata"
      aria-label={label}
    />
  );
}
