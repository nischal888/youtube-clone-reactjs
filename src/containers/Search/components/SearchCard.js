import React from "react";

export default function SearchCard({ title, image, time, description, click }) {
  return (
    <div className="searchPage__videoRow" onClick={click}>
      <img src={image} alt="" />
      <div className="searchPage__videoRowText">
        <h3>{title}</h3>
        <p className="videoRowText__headline">{time.slice(0, 10)}</p>
        <p className="videoRowText__descrption">{description}</p>
      </div>
    </div>
  );
}
