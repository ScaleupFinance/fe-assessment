import Presentation from "../components/exercise1/Presentation";
import Layout from "../components/Layout";

const Exercise1 = () => {
  return (
    <Layout>
      <h1>Exercise 1 - Variables in React</h1>

      <p>
        Implement the stop handler in <em>Presentation</em> component so that
        slides do not change automatically
      </p>

      <Presentation />
    </Layout>
  );
};

export default Exercise1;
