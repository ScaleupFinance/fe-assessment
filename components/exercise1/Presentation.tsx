import { useEffect, useState } from "react";
import Slide from "./Slide";

const Presentation = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const stopPresentation = setInterval(() => {
      setSlide((slide) => (slide === 4 ? 1 : slide + 1));
    }, 1000);

    return () => clearInterval(stopPresentation);
  }, []);

  const stopHandler = () => {
    console.log("Stop");
  };

  return (
    <>
      <button onClick={stopHandler}>STOP</button>

      <Slide slide={slide} />
    </>
  );
};

export default Presentation;
