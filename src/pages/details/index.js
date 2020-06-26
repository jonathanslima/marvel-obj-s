import React, { useEffect, useState } from "react";
import cryptData from "../../config/cripto";
import load from "../../assets/load.gif";
import "./details.scss";

import Header from "../../components/Header";
import Series from "../../components/Series";
import Events from "../../components/Events";

function Details() {
  const [dataHero, setDataHero] = useState({ dh: [] });
  const [counter, setCounter] = useState(0);
  const apibase = "https://gateway.marvel.com:443/v1/public/characters";
  const idHero = window.location.href.split("?")[1];

  const details = async () => {
    let data = cryptData();
    await fetch(`${apibase}/${idHero}?apikey=${data.apiKey}`)
      .then((res) => res.json())
      .then((res) => setDataHero(res));
  };

  useEffect(() => {
    details();
  }, [counter]);

  return (
    <>
      <Header />
      <section>
        {dataHero.data
          ? dataHero.data.results.map((item, index) => {
              return (
                <>
								<header
                  key={index}
                  className="header-inside"
                  style={{
                    backgroundImage: `url('${item.thumbnail.path}.${item.thumbnail.extension}')`,
                  }}
                >
                  <h1>{item.name}</h1>
                </header>

								<p className="center">{item.description}</p>
								</>
              );
            })
          : <div className="center"><img src={load} alt="loading"/></div>}
      </section>

      <Events />
      <Series />
    </>
  );
}

export default Details;
