import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Card title="Tekla and Microstation" img="card1.png" text="Very powerful CAD plugin. It is feature-rich and easy-to-use, greatly improving customer productivity." />
                    </div>
                    <div className="col-md-6 mb-2">
                        <Card title="Technical Support" img="card2.png" text="We always work closely with our client to know their demands and update our products to meet the new requirements of our clients." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
