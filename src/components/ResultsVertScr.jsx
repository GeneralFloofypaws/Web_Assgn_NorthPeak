import { useRef, useEffect } from "react";
import cards from "../data/cards"; 

function ResultsVertScr() {

    const cardLoop = [cards[cards.length - 1], ...cards, cards[0]];
    const track = useRef(null);

    useEffect(() => {

        const trackScroll = track.current;

        if (trackScroll) {

            trackScroll.scrollTop = trackScroll.clientHeight;

        }

    }, []);

    const scrollDet = () => {

        const trackScroll = track.current;

        const scrollT = trackScroll.scrollTop;
        const scrollH = trackScroll.scrollHeight;
        const clientH = trackScroll.clientHeight;

        if (scrollT + clientH >= scrollH - 5) {

            trackScroll.scrollTo({

                top: clientH,
                behavior: "auto"

            });

        }

        if (scrollT <= 5) {

            trackScroll.scrollTo({

                top: scrollH - clientH * 2,
                behavior: "auto"

            });

        }

    };

    return (

        <section className="results">

    <div className="results-info">

        <p className="section-tag">
            BEARING 03
        </p>

        <h2 className="section-title">
            Our Process
        </h2>

        <p className="section-copy">
            Every successful product begins with understanding.
            The cards beside you represent the journey we take
            with every client.
        </p>

    </div>

    <div
        className="card-track"
        ref={track}
        onScroll={scrollDet}
    >

        <div
    className="card-track"
    ref={track}
    onScroll={scrollDet}
>

    {
        cardLoop.map((card, index) => (

            <section
                className="glasscard"
                key={`${card.id}.${index}`}
            >

                <h1>{card.subject}</h1>

                <h2>{card.topic}</h2>

                <p>{card.content}</p>

            </section>

        ))
    }

</div>

    </div>

</section>

        

    );

}

export default ResultsVertScr;

