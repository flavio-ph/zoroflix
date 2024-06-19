import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useFavoriteContext } from "../../contexts/favorites";
import Sanji from "../../components/Sanji";

function Favorites () {

        const {favorite} = useFavoriteContext()
    

    return (
        <>
            <Header />
            <Container> 
                <section className={styles.favorites}>
                <h2>Meu Favoritos</h2>
                { <Sanji videos={favorite} emptyHeading="Sem favoritos"/>   }
                </section>
            </Container>
            <Footer />
            
        </>
    );
}

export default Favorites