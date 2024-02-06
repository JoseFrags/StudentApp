import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../public/assets//css/bootstrap.min.css";
import "../public/assets/css/main.scss";
import NextNProgress from "nextjs-progressbar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#579bff8c" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
