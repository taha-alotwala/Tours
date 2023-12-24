import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
    const tours = props.tours;
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div className="">
                {tours.map((tour) => {
                    return <Tour key={tour.id} removeTour={props.removeTour} {...tour} />;
                })}
            </div>
        </section>
    );
};

export default Tours;
