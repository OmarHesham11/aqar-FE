import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="developments">Our Developments</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">Signature Developments</Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="construction">Construction Progress</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="about">What We Do</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
