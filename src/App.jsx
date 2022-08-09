import { Fragment, useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CatchphraseList, CatchphraseItem } from "./components/Catchphrase"

const App = () => {

    const [loading, setLoading] = useState(false);
    const [catchphrases, setCatchphrases] = useState([]);

    useEffect(() => {

        setLoading(true);

        fetch("./catchphrases.json")
            .then( response => response.json() )
            .then( json => {
                setCatchphrases(json) 
                setLoading(false)
            }
            )

        
    }, []);

    return (
        <Fragment>

            <Header />

            {loading && 
                <div className="container"><center>carregando...</center></div>
            }

            {!loading && catchphrases.length > 0 &&
                <CatchphraseList>

                {catchphrases.map( (catchphrase, index) => {
                    return (
                        <CatchphraseItem 
                            title={catchphrase.title}
                            audio_src={catchphrase.audio_source}
                            key={`catchphrase_${index}`}
                            id={`catchphrase_${index}`}
                        />
                    )
                })}
                
                </CatchphraseList>
            }

            <Footer />

        </Fragment>
    )
}

export default App