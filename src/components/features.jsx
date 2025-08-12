import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Hizmetler</h2>
          <h3 >E-Ticaretinizi Büyütüyoruz</h3>
          <h4 >Aliçoo Dijital olarak e-ticaret işletmenizin büyümesine yönelik çözümler sunuyoruz.Uzman Ekimizle gelirinizi en üst düzeye çıkarmanıza destek oluyoruz.</h4>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>

                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
