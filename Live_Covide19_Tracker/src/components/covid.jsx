import { useEffect } from "react/cjs/react.production.min";

export const CovidData = () => {

    useEffect(()=>{
        const getCovidData = async () => {
            try{
                const res = await fetch("https://data.covid19india.org/data.json");
                const allData = await res.json();
                console.log(allData)
    
            }
            catch(err) {
                console.log(err);
            }
        }

        // getCovidData()
    },[])

  

    // useEffect(()=> {
    //     // getCovidData()
    // },[])
    return (
        <>
            <h1>Live Covide Data of India</h1>
        </>
    )
}