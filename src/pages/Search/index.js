import styles from "./Search.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Zoro from "../../components/Zoro";
import videos from "../../json/videos.json"

function Search() {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <section className={styles.search}>
          <h2>Pesquisar</h2>
          <Zoro videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );

}

export default Search;