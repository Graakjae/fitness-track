
export default function Filter( { handleFilters }) {
    function handleChange(event){
        const checkboxes = event.target.form.elements;
        const selectedCheckboxes = [];

        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                selectedCheckboxes.push(checkbox.value);
            }
        }

        handleFilters(selectedCheckboxes);
    }
    
  
  return (
    <form onChange={handleChange} className="filter-container">
        <label>
            Ben
            <input type="checkbox" value="Ben" />
        </label>
        <label>
            Biceps
            <input type="checkbox" value="Biceps" />
        </label>
        <label className="checkbox">
            Bryst
            <input type="checkbox" value="Bryst" />
        </label>
        <label>
            Mave
            <input type="checkbox" value="Mave" />
        </label>
        <label>
            Ryg
            <input type="checkbox" value="Ryg" />
        </label>
        <label>
            Skulder
            <input type="checkbox" value="Skulder" />
        </label>
        <label>
            Triceps
            <input type="checkbox" value="Triceps" />
        </label>
        <label>
            Underarm
            <input type="checkbox" value="Underarm" />
        </label>
    </form>
    );
}