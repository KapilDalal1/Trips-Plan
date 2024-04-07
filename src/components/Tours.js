import Cards from "./Cards";

function Tours({ tours, removeTour }) {
    return (
        <>
            <div>
                <h2 className="text-5xl m-[6vh] p-[1vh, 5vw] font-bold flex justify-center items-center rounded-[20px]">Plan with Kapil</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {tours.map((tour) => (
                    <Cards key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </>
    );
}

export default Tours;
