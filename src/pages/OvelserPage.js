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
            <h1>Users</h1>
            <section className="grid-container">
                {ovelser.map(ovelser => (
                    <article>
                        <h3>{ovelser.name}</h3>
                        <p>{ovelser.id}</p>
                    </article>
                ))}
            </section>
        </section>
    );
}


