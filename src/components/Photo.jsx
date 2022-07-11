import React from "react";

function Photo({ url, title }) {
  return (
    <div className="photo">
      <img src={url} alt={`Photo: ${title}`} title={title} />
    </div>
  );
}

export default Photo;
