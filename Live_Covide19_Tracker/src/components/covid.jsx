import { useEffect } from "react";

import "./covid.css"

export const CovidData = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const allData = await res.json();
            console.log(allData)

        }
        catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        // getCovidData()
    }, [])

    return (
        <>
        <section>
            <h1>🔴 Live</h1>
            <h2>Live Covid Data of India</h2>


            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">
                                <span>OUR</span> COUNTRY</p>
                                <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section>
        </>
    )
}