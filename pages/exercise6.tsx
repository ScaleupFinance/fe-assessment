import Layout from "../components/Layout";

const Exercise5 = () => {
  return (
    <Layout>
      <h1>Exercise 6 - NextJS</h1>

      <p>
        All of these exercise components are using <em>Layout</em> component.
      </p>
      <p>
        Change the code so that <em>Layout</em> is the default in{" "}
        <em>pages/_app.tsx</em> and it can be overridden from the page
        component. <em>pages/index.tsx</em> should not have any layout.
      </p>
    </Layout>
  );
};

export default Exercise5;
