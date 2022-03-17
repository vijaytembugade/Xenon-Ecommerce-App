import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFilter } from "../../Contexts";

const options = [
  { value: "medium", label: "Medium" },
  { value: "small", label: "Small" },
  { value: "large", label: "Large" },
];

const SizeFilter = () => {
  const { dispatch } = useFilter();

  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    const size = selectedOption.map((value) => {
      return value.value;
    });

    dispatch({ type: "FILTER_BY_SIZE", payload: size });
  }, [selectedOption]);

  return (
    <div>
      <h3>Select Sizes</h3>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
      />
    </div>
  );
};

export default SizeFilter;
