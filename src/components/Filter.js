
export default function filter() {
    const [ovelser, setOvelser] = useState([]);
    
    function filterById(id) {
        let filteredOvelser = [];
          if (ovelser.id.includes(id)) {
            filteredOvelser.push(ovelser);
          }
        }
    
  
  return (
    <article>
        <input type="checkbox" onclick="reset()" onChange={filterById} >Reset</input>
        <input type="checkbox" onclick="filterById('0')" onChange={filterById} >0</input >
        <input type="checkbox" onclick="filterById('1')" onChange={filterById} >1</input>
        <input type="checkbox" onclick="filterByid('2')" onChange={filterById}>2</input>
        <input type="checkbox" onclick="filterByid('3')" onChange={filterById}>3</input>
        <input type="checkbox" onclick="filterByid('4')" onChange={filterById}>4</input>    
    </article>
);
}