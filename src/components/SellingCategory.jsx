import React from "react";
import ScrollDraggable from "./ScrollDraggable";

function SellingCategory({ data }) {
  return (
    <>
      <div className="grouping-categories">
        <h3 className="group-category-title">خرید بر اساس دسته بندی</h3>
          <ScrollDraggable className='group-categories' next='none' prev='none'>
          {data.categories.map((category, index) => {
            return (
              <div className="group-category" key={category.id}>
                <div>
                  <img
                    src={category.image}
                    alt=""
                    className="category-img"
                  />
                </div>
                <p className="category-title">{category.title}</p>
              </div>
            );
          })}
          </ScrollDraggable>
      </div>
    </>
  );
}
export default SellingCategory;
