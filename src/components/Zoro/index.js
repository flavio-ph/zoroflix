import { useState } from "react";
import Sanji from "../Sanji";
import styles from "./Zoro.module.css";
import videos from "../../json/videos.json"

//filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function Zoro({videos}) {

    const [searchText, setSearchText] = useState('Geografia')
    const foundVideos = filterVideos( videos, searchText)

    return ( 
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            /> 
            <Sanji 
                videos={foundVideos}
                emptyHeading={`Sem vídeos sobre ${searchText}`}
                />
        </section>
    );
}

export default Zoro;
//SearchVideoList nome original 