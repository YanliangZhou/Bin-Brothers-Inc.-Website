import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-4">
                <div><img src="../img/company3.jpg" /></div>
              </div>
              <div className="col-md-4">
                <h1 className="logo">BINSYS BROTHERS INC.</h1>
                <p className="footer-text">
                 Industrial CAD plugin provider
                </p>
              </div>
              <div className="col-md-4">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000}> Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              
              {/* <div className="col-md-6">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >BinSys Brothers Inc.</Link>
                  </li>
                  <li>
                    <Link to="#" >3212 Spring Hill Road</Link>
                  </li>
                  <li>
                    <Link to="#" >Plano,Tx 75025, USA</Link>
                  </li>
                  <li>
                    <Link to="#" >Tel : 972-814-8249</Link>
                  </li>
                  <li>
                    <Link to="#" >Fax: 972-712-0601</Link>
                  </li>
                  <li>
                    <Link to="#" >E-mail:  sales@binsystech.com</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
