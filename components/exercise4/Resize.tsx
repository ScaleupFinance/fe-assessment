import { useEffect, useState } from "react";

const getSize = () => ({
  width: window.innerWidth,
  height: window?.innerHeight,
});

const Resize = () => {
  const [size, setSize] = useState(getSize());

  const handleResize = () => {
    setSize(getSize());
  };

  // QUESTION: There is a bug in this code, can you find it?
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <p>
        Window size: {size.width} x {size.height}
      </p>
    </div>
  );
};

export default Resize;
