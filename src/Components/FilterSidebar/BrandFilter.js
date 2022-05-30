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
  const {
    state: { brand },
    dispatch,
  } = useFilter();

  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    setSelectedOption(brand.map((value) => ({ value: value, label: value })));
  }, [brand]);

  const handleBrandChnage = (select) => {
    setSelectedOption(select);
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: select.map((value) => value.value),
    });
  };

  return (
    <div>
      <h3>Select Brands</h3>
      <Select
        value={selectedOption}
        onChange={handleBrandChnage}
        placeholder="brands"
        options={options}
        isMulti={true}
      />
    </div>
  );
};

export default BrandFilter;
