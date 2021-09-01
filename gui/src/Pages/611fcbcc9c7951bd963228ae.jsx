import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function A611fcbcc9c7951bd963228ae() {
  const info = window.location.pathname;
  const [cards, setcards] = useState();
  // let [selected, setselected] = useState();
  useEffect(() => {
    Axios.get("https://project-blogs.herokuapp.com/cards").then((res) => {
      console.log(res.data.list);
      if (res.data.list.length) {
        setcards(res.data.list);
      }
    });
  }, []);

  //   cards.forEach((card) => {
  //     if ("/" + card._id === info) {
  //       setselected = card.title;
  //     }
  //   });

  return (
    <>
      <div>{info}</div>
      {/* <div>{selected}</div> */}
    </>
  );
}
