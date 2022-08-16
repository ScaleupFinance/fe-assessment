import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    <Head>
      <title>Scaleup Assessment</title>
    </Head>

    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </footer>
  </div>
);

export default Layout;
