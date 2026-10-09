const WORDMARK = ["A", "I", "L", "O", "G", "I", "Q", "S"];

export default function Preloader() {
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading">
          {/* Indexed keys, not the letter itself: "I" appears twice and React
              would otherwise warn about duplicate keys. */}
          {WORDMARK.map((letter, index) => (
            <span
              key={index}
              data-text-preloader={letter}
              className="letters-loading"
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
