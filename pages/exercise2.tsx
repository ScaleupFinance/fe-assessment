import Grid from "../components/exercise2/Grid";
import Layout from "../components/Layout";

const Exercise2 = () => {
  return (
    <Layout>
      <h1>Exercise 2 - CSS grid</h1>

      <p>
        Change styles of <em>Grid</em> component so that dinos are displayed in
        a 3 x 3 grid with 1 rem gap between them
      </p>

      <Grid />
    </Layout>
  );
};

export default Exercise2;
