import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="container mt-5">
      {/* Services Section */}
      <section className="row text-center">
        <div className="col-md-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1667511059430-f9c4bc25059b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crop Analysis"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Termésfigyelés</h3>
          <p>Valós idejű elemzés az optimalizált hozam érdekében.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1661393591258-bee68c785619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Soil Analysis"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Talajelemzés</h3>
          <p>Pontos talaj-egészségügyi felmérés.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1664478063149-295e8449a105?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Spraying Drones"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Precíziós permetezés</h3>
          <p>Csökkentse a hulladékot, növelje a hatékonyságot.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Irrigation Management"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Öntözésmenedzsment</h3>
          <p>Optimalizált vízhasználat és költségcsökkentés.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1648127025799-270266974328?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pest Control"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Kártevőirtás</h3>
          <p>Hatékony megoldások a növények védelmében.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1661329918359-52c632f7b37f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Yield Prediction"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">Hozambecslés</h3>
          <p>Adatalapú előrejelzések a jobb döntésekért.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5">
        <h2>Kezdje el még ma</h2>
        <p>Növelje gazdasága termelékenységét innovatív drónmegoldásainkkal.</p>
        <a href="/connections" className="btn btn-primary btn-lg">
          Vegye fel a kapcsolatot
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
