import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFilter } from "../../Contexts";

const options = [
  { value: "medium", label: "Medium" },
  { value: "small", label: "Small" },
  { value: "large", label: "Large" },
];

const SizeFilter = () => {
  const {
    state: { size },
    dispatch,
  } = useFilter();

  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    setSelectedOption(size.map((value) => ({ value: value, label: value })));
  }, [size]);

  const handleSizeChnage = (select) => {
    setSelectedOption(select);
    dispatch({
      type: "FILTER_BY_SIZE",
      payload: select.map((value) => value.value),
    });
  };

  return (
    <div>
      <h3>Select Sizes</h3>
      <Select
        value={selectedOption}
        onChange={handleSizeChnage}
        placeholder="sizes"
        options={options}
        isMulti={true}
      />
    </div>
  );
};

export default SizeFilter;
