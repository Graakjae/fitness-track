
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
    <form onChange={handleChange}>
        <label>
            Bryst
            <input type="checkbox" value="Bryst" />
        </label>
        <label>
            Ben
            <input type="checkbox" value="Ben" />
        </label>
        <label>
            Mave
            <input type="checkbox" value="Mave" />
        </label>
        <label>
            Triceps
            <input type="checkbox" value="Triceps" />
        </label>
    </form>
    );
}