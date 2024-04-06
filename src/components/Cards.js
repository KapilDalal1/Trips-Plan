import { useState } from "react";

function Cards({id,name , info, image, price, removeTour} ){
    const [readmore, setReadmore] = useState(false); 

    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="wrapper">
            <div className="Cards">
                <img className="images" src={image} alt="" />
            <div className="tour-details">
                <h2>{price}</h2>
                <h2>{name}</h2>
            </div>    
                <div className="info" onClick={readmoreHandler}>
                    {description}
                    <span>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
                <button className="btn-noInterested" onClick={() => removeTour(id)}> Not Interested </button>
            </div>
        </div>   
    )
}

export default Cards;