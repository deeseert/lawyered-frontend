import React from "react";

import { Select } from "semantic-ui-react";

const selectOptions = [
  { key: "nm", value: "Name", text: "Name" },
  { key: "lc", value: "Location", text: "Location" },
  { key: "rt", value: "Rating", text: "Rating" },
  { key: "pr", value: "Price", text: "Price" }
];

const Filter = props => {
  // debugger;
  return (
    <Select
      placeholder="Filter By:"
      onChange={event => props.updateSort(event.target.innerText)}
      options={selectOptions}
    />
  );
};

export default Filter;
