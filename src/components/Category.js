import React from "react";

function Category(props) {
  const { button, filter } = props;

  return (
    <div className="Category">
      <h3>หมวดหมู่สินค้า</h3>
      {/* <div>
        ค้นหา{" "}
        <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="ค้นหา..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div> */}

      <div className="list-group">
        {button.map((cat, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={() => filter(cat)}
              className="list-group-item list-group-item-action list-group-item-dark"
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
