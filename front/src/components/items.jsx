import React from "react";
import Item from "./item";

const Items = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-6 margin-bottom">
        <Item />
      </div>
      <div className="col-md-4 col-sm-6 margin-bottom">
        <Item />
      </div>
      <div className="col-md-4 col-sm-6 margin-bottom">
        <Item />
      </div>
    </div>
  );
};

export default Items;
