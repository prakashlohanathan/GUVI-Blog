import React from 'react'

function Home() {
  const home = {
    Name: "Home",
    imgUrl: "https://colorlib.com/wp/wp-content/uploads/sites/2/courses-free-template.jpg.webp",
    
  };

  return (
    <>
      <h1>{home.Name}</h1>
      <img src={home.imgUrl} alt="FullstackDeloveper" />
      
    </>
  );
}

export default Home