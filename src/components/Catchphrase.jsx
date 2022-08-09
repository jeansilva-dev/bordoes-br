import styles from "./Catchphrase.module.css"
import SpeakerIcon from "../assets/speaker.svg"

export const CatchphraseList = ( { children } ) => {
    return (
        <ul className={styles.CatchphraseList}>
            {children}
        </ul>
    )
}

export const CatchphraseItem = ( { title, audio_src, id }) => {
    
    const playPause = (e) => {        
        let audio = e.currentTarget.firstChild;
        if (!audio.paused) {
            audio.pause()
            audio.currentTime = 0;
        }

        audio.play();
    }

    return (
        <li className={styles.CatchphraseItem} id={id} onClick={playPause}>
            <audio src={audio_src} preload="true">
                <source src={audio_src} type="audio/mp4" />
            </audio>
            <img src={SpeakerIcon} alt="" />
            <div>
                {title}
            </div>
        </li>
    )
}

