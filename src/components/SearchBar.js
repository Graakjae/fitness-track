export default function SearchBar({ setValue }) {
  /**
   * handleClick is called when user clicks on the Article (PostCard)
   */

  function handleSearch(event) {
    setValue(event.target.value.toLowerCase());
  }

  return (
    <article>
      <input type="search" placeholder="Search" onChange={handleSearch} />
    </article>
  );
}
