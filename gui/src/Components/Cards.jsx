import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../Styles/Cards.css";

export default function Cards() {
  const [cardLi, setCardLi] = useState([]);

  useEffect(() => {
    Axios.get("https://git.heroku.com/project-blogs.git/cards").then((res) => {
      console.log(res.data.list);
      if (res.data.list.length) {
        setCardLi(res.data.list);
      }
    });
  }, []);

  return (
    <div id="cards">
      <div>
        <ul className="list-group">
          {cardLi.map((card) => (
            <li key={card._id}>
              <Link to={"/" + card._id}>
                <div className="title">{card.title}</div>
                <div className="image">
                  <img src={card.image} alt="Cards" />
                </div>
                <div className="card-content">
                  <div className="lang">Category: {card.language}</div>
                  <div className="desc">
                    <p>Description:</p>
                    {card.description}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
