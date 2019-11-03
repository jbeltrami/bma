const CtaRow = () => (
  <section className="cta-row-two">
    <div className="container">
      <div className="row cta-wrapper odd">
        <div className="col-lg-10">
          <div className="cta-img">
            <img className="img-fluid" src="./static/cta2.jpg" alt="" />
          </div>
          <div className="single-cta">
            <h4 className="text-center marker">Learn About BMA</h4>
            <p className="text-center">
              All of the massage therapists at Boston Massage Associates are
              nationally certified, fully insured and licensed in the state of
              MA.
            </p>
          </div>
        </div>
      </div>

      <div className="row cta-wrapper even">
        <div className="col-lg-10 offset-lg-2">
          <div className="single-cta">
            <h4 className="text-center marker">Massage Services</h4>
            <p className="text-center">
              Deep tissue massages, sports massages, assisted stretching, and
              many more modalities are offered here at Boston Massage
              Associates.
            </p>
          </div>

          <div className="cta-img ml-auto">
            <img className="img-fluid" src="./static/cta1.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="row cta-wrapper odd">
        <div className="col-lg-10">
          <div className="cta-img">
            <img className="img-fluid" src="./static/cta3.jpg" alt="" />
          </div>
          <div className="single-cta">
            <h4 className="text-center marker">Rates</h4>
            <p className="text-center">
              View our standard massage and assisted stretching rates, if you
              have any questions please contact us directly.
            </p>
          </div>
        </div>
      </div>
      {/* 
      <div className="row">
        <div className="col-lg-4">
          <div className="single-cta">
            <h4 className="text-center marker">Rates</h4>
            <img src="./static/cta3.jpg" alt="" />
            <p className="text-center">
              View our standard massage and assisted stretching rates, if you
              have any questions please contact us directly.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </section>
);

export default CtaRow;
