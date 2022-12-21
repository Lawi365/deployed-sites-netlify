import React from "react";

function ImageList(props) {
  // console.log(props)
  const images = props.images.map((image) => {
    return (
      <img
        className=""
        style={{
          margin: "30px 40px",
          width: "24vw",
          borderRadius: "10px",
          height: "250px",
        }}
        key={image.id}
        src={image.webformatURL}
        alt=""
      />
    );
  });
  return <div>{images}</div>;
}

export default ImageList;
