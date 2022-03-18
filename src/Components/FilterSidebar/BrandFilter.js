import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFilter } from "../../Contexts/FilterContext/filter-context";

const options = [
  { value: "Staple", label: "Staple" },
  { value: "Rocketbook", label: "Rocketbook" },
  { value: "TRU-RED", label: "True Red" },
  { value: "Moleskine", label: "Moleskine" },
];

const BrandFilter = () => {
  const { state, dispatch } = useFilter();

  const [selectedOption, setSelectedOption] = useState(state.brand);

  useEffect(() => {
    const brand = selectedOption.map((value) => {
      return value.value;
    });

    dispatch({ type: "FILTER_BY_BRAND", payload: brand });
  }, [selectedOption]);

  return (
    <div>
      <h3>Select Brands</h3>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
      />
    </div>
  );
};

export default BrandFilter;
