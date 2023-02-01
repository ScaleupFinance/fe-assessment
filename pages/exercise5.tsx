import CurrencyCalculator from "../components/exercise5/CurrencyCalculator";
import Layout from "../components/Layout";

const Exercise5 = () => {
  return (
    <Layout>
      <h1>Exercise 5 - Typescript, Testing and Improvments</h1>

      <p>
        1. Fix typescript error in <em>CurrencyCalculator</em> component. (If
        errors are not visible in your editor, run <code>tsc --noEmit</code> to
        see them.)
      </p>

      <p>
        2. Explain how you would test <em>CurrencyCalculator</em> and{" "}
        <em>ShowAmount.tsx</em> components.
      </p>

      <p>
        3. Explain how would you improve the <em>CurrencyCalculator</em> and{" "}
        <em>ShowAmount.tsx</em> components.
      </p>

      <CurrencyCalculator />
    </Layout>
  );
};

export default Exercise5;
