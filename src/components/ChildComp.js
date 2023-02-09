import React, { memo } from "react";
const ChildComp = ({ printCount1 }) => {
  console.log("child component rendered");

  return (
    <div>
      <button onClick={printCount1} className="btn btnAdd">
        Print count1 value
      </button>
    </div>
  );
};
export default memo(ChildComp);
