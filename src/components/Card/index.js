import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconFavorite from "./favorite.png";
import iconUnFavorite from "./unfavorite.png";
import { useFavoriteContext } from '../../contexts/favorites';


function Card({ id }) {

    const {favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconUnFavorite : iconFavorite

    return (
        <>
            <section className={styles.card}>
                <Link to={ `/watch/${id}` }
                    href={`https://www.youtube.com/watch?v=${id}`}>
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt="Capa"  className={styles.capa}/>
                </Link>
                <figure className={styles.icon}>
                    <img 
                        src={icone} 
                        alt="Ícone" 
                        onClick={() => addFavorite({id})}
                        />
                </figure>
            </section>
        
        </>

    );
}

export default Card;

