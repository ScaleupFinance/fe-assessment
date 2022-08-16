import Form from "../components/exercise3/Form";
import Layout from "../components/Layout";

const Exercise3 = () => {
  return (
    <Layout>
      <h1>Exercise 3 - Throttle or Debounce</h1>

      <p>
        Change implementation of <em>Form</em> component so that result is
        updated only after 1 second of inactivity
      </p>

      <Form />
    </Layout>
  );
};

export default Exercise3;
