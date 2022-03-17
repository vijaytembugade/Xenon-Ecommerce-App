import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "staple", label: "Staple" },
  { vaSue: "rocketbook", label: "Rocketbook" },
  { value: "truered", label: "True Red" },
  { value: "moleskine", label: "Moleskine" },
];

const SelectFilter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h3>Brand</h3>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
      />
    </div>
  );
};

export default SelectFilter;
