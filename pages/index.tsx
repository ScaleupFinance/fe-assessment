import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scaleup Assessment</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Scaleup Assessment</h1>

        <p className={styles.description}>
          All the exercises are files in the <em>pages</em> folder. All
          components used in exercises are in <em>components</em> folder. All
          styles are in <em>styles</em> folder.
        </p>

        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((exercise) => (
            <Link key={exercise} href={`/exercise${exercise}`}>
              <a className={styles.card}>
                <h2>Exercise {exercise} &rarr;</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://scaleup.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Scaleup Finance
        </a>
      </footer>
    </div>
  );
};

export default Home;
