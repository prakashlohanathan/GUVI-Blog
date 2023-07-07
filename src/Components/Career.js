import React from 'react';

function Career() {
  const career = {
    Name: "Career",
    imgUrl: "https://c0.wallpaperflare.com/preview/498/976/47/success-stairs-board-drawing.jpg",
    
  };

  return (
    <>
      <h1>{career.Name}</h1>
      <img src={career.imgUrl} alt="Career" />
      
    </>
  );
}

export default Career;
