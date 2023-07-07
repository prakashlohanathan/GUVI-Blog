import React from 'react';

function FullstackDeloveper() {
  const fsd = {
    Name: "FullStackDeveloper",
    imgUrl: "https://img.freepik.com/premium-vector/full-stack-developer-banner-landing-page_1124-1250.jpg?w=1380",
    Description: "The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content created by experts!",
    Duration: "4 Months",
    Price: "₹ 85,000",
  };

  return (
    <>
      <h1>{fsd.Name}</h1>
      <img src={fsd.imgUrl} alt="FullstackDeloveper" />
      <p>{fsd.Description}</p>
      <p>Duration: {fsd.Duration}</p>
      <p>Price: {fsd.Price}</p>
    </>
  );
}

export default FullstackDeloveper;
