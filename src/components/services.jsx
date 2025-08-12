import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>E-Ticaret Danışmanlık Paketlerimiz</h2>
          <p>
            işletmenizin ihtiyacına uygun paketleri seçin, satışlarınızı birlikte büyütelim.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <h5>{d.price}</h5>
                  <div className="services-text">
                    <ul>
                      {
                        d.text.map((t, it) => (
                          <li>{t}</li>
                        ))
                      }

                    </ul>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div >
  );
};
