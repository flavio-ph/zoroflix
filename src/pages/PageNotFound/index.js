import Header from '../../components/Header';
import erro404 from './erro404.png'
import style from './PageNotFound.module.css'
import Footer from '../../components/Footer';

function PageNotFound () {
    return (
        <>
             <Header />
                <section className={style.container}>
                    <h2>Ops! Parece que você se perdeu!</h2>
                    <p>Conteúdo não encontrado! | ERRO 404</p>
                    <img src={erro404} alt="Logo de Página não localizada" />
                </section>
             <Footer />
        </>
    );


}

export default PageNotFound;