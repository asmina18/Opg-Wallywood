import { useState, useEffect } from "react";
import myImage from '../../assets/Hero.jpg';
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";
import style from './Homepage.module.scss'
import { Headline } from '../../components/Headline/Headline'

export function HomePage() {
  // Oprettelse af tilstand til opbevaring af plakatliste
  const [posterList, setPosterList] = useState([]);

  // Brug af useEffect til udførelse af handlinger ved komponentmontering
  useEffect(() => {
    // URL for forespørgsel til serveren
    const url = 'http://localhost:4000/poster/list?limit=2';

    // Forespørgsel til serveren for at hente data
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Opdatering af tilstanden med de hentede data
        setPosterList(data);
      })
      .catch(error => console.error("Der opstod en fejl under forespørgslen:", error));
  }, []);

  return (
    <div className={style.divContainer}>
      {/* Visning af baggrundsbilledet */}
      <img src={myImage} alt="BgImg" />
      <Headline>Sidste nyt ... </Headline>
      <div className={style.imgContainer}>
        {/* Visning af plakatlisten */}
        {posterList.map((item, index) => (
          <figure key={index}>
            <img src={item.image} alt="" />
            <figcaption>
              {/* Visning af plakatens navn */}
              <h3>{item.name}</h3>
              <p>{item.genres.map.title}</p>
              <OnClickButton>Læs mere</OnClickButton>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
