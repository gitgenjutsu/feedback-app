import React from "react";

const checkboxes = [
  { id: 1, text: "Checkbox 1" },
  { id: 2, text: "Checkbox 1" },
  { id: 3, text: "Checkbox 1" }
];

class SearchResults extends React.Component {
  state = {
    selectedCheckboxes: []
  };

  onChange = id => {
    const selectedCheckboxes = this.state.selectedCheckboxes;

    // Find index
    const findIdx = selectedCheckboxes.indexOf(id);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(id);
    }

    this.setState({
      selectedCheckboxes: selectedCheckboxes
    });
  };
  render() {
    const { selectedCheckboxes } = this.state;
    return (
      <div className="App">
        {checkboxes.map(checkbox => (
          <label key={checkbox.id}>
            {checkbox.text}
            <input
              type="checkbox"
              onChange={() => this.onChange(checkbox.id)}
              selected={selectedCheckboxes.includes(checkbox.id)}
            />
          </label>
        ))}
        <p>Selected checkboxes: {JSON.stringify(selectedCheckboxes)}</p>
      </div>
    );
  }
}

export default SearchResults;
