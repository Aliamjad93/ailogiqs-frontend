export default function Preloader() {
  return (
    <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="I" className="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                        L
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="G" className="letters-loading">
                        G
                    </span>
                    <span data-text-preloader="I" className="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="Q" className="letters-loading">
                        Q
                    </span>
                    <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
  );
}
