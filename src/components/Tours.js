import Cards from "./Cards";

function Tours({ tours, removeTour }) {
    return (
        <>
            <div>
                <h2 className="heading">Plan with Kapil</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Cards {...tour} removeTour={removeTour} />;
                })}
            </div>
        </>
    );
}

export default Tours;