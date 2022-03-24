import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

export default function OvelserPage() {

    const [ovelser, setOvelser] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const filteredOvelser = ovelser.filter(ovelser => ovelser.name.toLowerCase().includes(searchValue));

    useEffect(() => {
        async function getOvelser() {
        const url = "https://api.jsonbin.io/b/623af66406182767437ddcdf/1";
        const response = await fetch(url);
        const data = await response.json();
        setOvelser(data);
        }
        getOvelser();
    }, []);

    return (
        <section className="page">
            <h1>Øvelser</h1>
            <SearchBar setValue={setSearchValue} />
            <Filter setValue={setSearchValue}/>
            <section>
                {filteredOvelser.map(ovelser => (
                    <article className="ovelser">
                        <h3>{ovelser.name}</h3>
                    </article>
                ))}
            </section>
        </section>
    );
}


