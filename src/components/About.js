function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Provides comprehensive CAD plug-in support from designing 
            simple models to large engineering components. By working 
            closely with our customers we are able to identify specific 
            areas where improvements can be made and bring to fruition 
            real solutions to solve and enhance our customers needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
