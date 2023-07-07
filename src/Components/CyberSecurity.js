import React from 'react';

function CyberSecurity() {
  const cyber = {
    Name: "Cybersecurity",
    imgUrl: "https://cdn.dribbble.com/users/9684942/screenshots/17733637/media/8bee5573b8a4a2a49fa85fa52c451226.jpg?compress=1&resize=1200x900&vertical=center",
    Description: "The Cybersecurity & Ethical hacking and have been key in making sure that your data online GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts! The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content created by experts!",
    Duration: "2 Months",
    Price: "₹ 75,000"
  };

  return (
    <>
    <div>
      <h1>{cyber.Name}</h1>
      <img src={cyber.imgUrl} alt="Cybersecurity" />
      <p>{cyber.Description}</p>
      <p>Duration: {cyber.Duration}</p>
      <p>Price: {cyber.Price}</p>
    </div>
    </>
  );
}

export default CyberSecurity;
