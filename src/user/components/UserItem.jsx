import React from "react";

export default function UserItem({ id, name, image, placeCount }) {
  return (
    <li>
      <div>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
}
