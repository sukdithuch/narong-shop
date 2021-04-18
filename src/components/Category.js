import React from "react";

function Category(props) {
  const { searchText, handleChange, button, filter } = props;

  return (
    <div>
      <h1>Category</h1>
      <div>
        ค้นหา{" "}
        <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="ค้นหา..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className="list-group">
        {button.map((cat, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={() => filter(cat)}
              className="btn"
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
