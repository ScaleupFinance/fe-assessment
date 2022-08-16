import styles from "../../styles/Slide.module.css";

interface SlideProps {
  slide: number;
}

const Slide = ({ slide }: SlideProps) => (
  <div className={styles.frame}>
    <h1>Slide {slide}</h1>
    <p>Content of slide {slide}</p>
  </div>
);

export default Slide;
