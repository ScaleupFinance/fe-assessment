import dynamic from "next/dynamic";
import Layout from "../components/Layout";
// QUESTION: Why do we use dynamic import with ssr false here?
const Resize = dynamic(() => import("../components/exercise4/Resize"), {
  ssr: false,
});

const Exercise4 = () => {
  return (
    <Layout>
      <h1>Exercise 4 - Custom Hooks</h1>

      <p>
        Move window size logic of <em>Resize</em> component to a custom{" "}
        <em>useWindowSize</em> hook
      </p>

      <Resize />
    </Layout>
  );
};

export default Exercise4;
