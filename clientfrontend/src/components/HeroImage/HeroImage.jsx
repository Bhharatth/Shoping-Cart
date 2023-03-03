import React, { useEffect, useState } from "react";
import "./HeroImage.css";

const HeroImage = () => {
  const images = [
   {url: "https://i.ibb.co/DG69bQ4/2.png",title: 'SUMMER SALE', desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS"},
   {url: "https://i.ibb.co/cXFnLLV/3.png",title: 'AUTUMN COLLECTION', desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."},
   {url: "https://i.ibb.co/DG69bQ4/2.png",title: 'LOUNGEWEAR LOVE', desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."},
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="hero">
      <img src={currentImage.url} alt={currentImage.title} />
      <div className="heroDetails">
      <div className="title">{currentImage.title}</div>
      <div className="desc">{currentImage.desc}</div>
      </div>
      
    </div>
  );
};

export default HeroImage;