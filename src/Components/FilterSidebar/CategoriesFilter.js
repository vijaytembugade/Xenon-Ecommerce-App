import React from "react";
import { useFilter } from "../../Contexts";

function CategoriesFilter() {
  const { state, dispatch } = useFilter();
  const { categories } = state;

  return (
    <>
      <div className="category-container">
        <h3>Categories</h3>
        <label>
          <input
            checked={categories && categories.includes("Diary")}
            type="checkbox"
            value="Diary"
            onChange={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Diary",
              })
            }
          />
          <span> Diaries </span>
        </label>
        <label>
          <input
            checked={categories && categories.includes("Notebook")}
            value="Notebook"
            type="checkbox"
            onChange={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Notebook",
              })
            }
          />
          <span> Notebooks </span>
        </label>
        <label>
          <input
            checked={categories && categories.includes("PocketBook")}
            type="checkbox"
            onChange={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "PocketBook",
              })
            }
          />
          <span> Pocket Book </span>
        </label>
        <label>
          <input
            checked={categories && categories.includes("SubjectNotebooks")}
            type="checkbox"
            onChange={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "SubjectNotebooks",
              })
            }
          />
          <span> Subject Notebooks </span>
        </label>
      </div>
    </>
  );
}

export default CategoriesFilter;
