import React from "react";

export default function Avatar({ image, alt, width, height }) {
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
}
