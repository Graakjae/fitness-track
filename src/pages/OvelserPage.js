import { useEffect, useState } from "react";


export default function OvelserPage() {

    
    
    const [ovelser, setOvelser] = useState([]);

    useEffect(async () => {
        const url = "https://api.jsonbin.io/b/623af66406182767437ddcdf";
        const response = await fetch(url);
        const data = await response.json();
        setOvelser(data);
    }, []);

    return (
        <section className="page">
            <h1>Øvelser</h1>
            <section>
                {ovelser.map(ovelser => (
                    <article className="ovelser">
                        <h3>{ovelser.name}</h3>
                    </article>
                ))}
            </section>
        </section>
    );
}


