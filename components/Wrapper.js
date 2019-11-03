const Wrapper = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <>
      <nav className="navbar">
        <img className="logo" src="./static/logoYellowBg.png" alt="" />

        <h1>Boston Massage Associates</h1>

        <ul className="nav-items ml-auto">
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rates
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {children}
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2019 Boston Massage Associates | 437 Boylston
                Street, Suite 402, 4th Floor Boston, MA 02116 | 617-391-0537 |
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wrapper;
