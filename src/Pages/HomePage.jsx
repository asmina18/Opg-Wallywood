import { useState, useEffect } from "react";
import myImage from '../assets/biografer.jpg'
import { OnClickButton } from "../components/OnClickButton/OnClickButton";


export function HomePage() {

  const [posterList, setPosterList] = useState([]);

  useEffect(() => {

    const url = 'http://localhost:4000/poster/list?limit=2'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data); // Проверьте данные в консоли
        setPosterList(data);
      })
      .catch(error => console.error("Произошла ошибка при запросе:", error));
  }, [])

  const imageStyle = {
    width: '50%',
    height: 'auto',
  };

  return (
    <div>
      <img src={myImage} alt="BgImg" style={imageStyle} />

      {/* Mapping and rendering posters */}

      {posterList.map((item, index) => (
        <figure key={index}>
          <img src={item.image} alt="" />
          <figcaption>
            <h3>{item.name}</h3>
            <p>{item.genres[0].title}</p>
            <OnClickButton clickEvent={() => alert('You have clicked.')}>Read more</OnClickButton>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
