import { useState } from "react";

function Cards({id, name, info, image, price, removeTour}) {
    const [readmore, setReadmore] = useState(false); 

    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="flex items-center flex-col rounded-[10px] shadow-md m-[1rem] p-[1rem] max-w-[400px]">
            <img className="overflow-hidden" src={image} alt="" />
            <div className="my-5 mx-1">
                <h2 className="text-[#1faa59] text-[1.3rem]">{price}</h2>
                <h2 className="text-[1.5rem]">{name}</h2>
                <div className="info" onClick={readmoreHandler}>
                    {description}
                    <span className="text-[#12b0e8] cursor-pointer">
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="bg-[#b4161b21] cursor-pointer text-[18px] font-bold mt-[18px] py-[10px] px-[80px] border-[1px] border-solid rounded-[10px] border-[#b4161b] hover:bg-red-700" onClick={() => removeTour(id)}> Not Interested </button>
        </div>
    );
}

export default Cards;
