import Card from "../Card";
import styles from './VideoList.module.css';

function Sanji({videos, emptyHeading}) {
    const count = videos?.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'videos' : 'video'
      heading = `${count} ${noun}`
    }
    return (
        <>
            <h2>{heading}</h2>
            <section className={styles.videos}>
                { videos?.map((video) => <Card id={video.id} key={video.id} />) }
            </section>
        </>

    );
}
export default Sanji;
//videoList