import { useEffect, useState } from "react";
import "../style/Cards.css";
import { charData } from "./charData";

const Cards = (props) => {
    const [clickedCards, setClickedCards] = useState([]);
    const randomCards = charData;

    function shuffle(){
        for(let i = randomCards.length-1; i>0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
        }
    }

    useEffect(() => {
        shuffle();
    });

    function checkScore(e){
        if(!clickedCards.includes(e.target.closest(".card").id)){
            setClickedCards([
                ...clickedCards,
                e.target.closest(".card").id
            ]);
            props.increaseScore();
        } else {
            props.checkBestScore(clickedCards.length);
            props.resetScore();
            setClickedCards([]);
        }
    }

    return (
        <div id="cardsDisplay">
            {randomCards.map((card) => {
                return(
                    <div 
                        className="card"
                        key={card.id}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        id={card.id}
                        onClick={checkScore}
                    >
                        <img src={card.img} alt={card.text}/>
                    </div>
                ) 
            })}
        </div>
    )
}

export default Cards;