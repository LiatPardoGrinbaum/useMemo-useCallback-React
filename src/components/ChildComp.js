import React, { memo } from "react";
const ChildComp = ({ sumOfNums }) => {
  console.log("child component rendered");

  return (
    <div>
      <p>Sum of all numbers: {sumOfNums}</p>
      {/*   <div>
        {list.map((num, idx) => {
          return <span key={idx}>{`${num} `}</span>;
        })}
      </div> */}
    </div>
  );
};
export default memo(ChildComp);
// export default memo(ChildComp, areEqual);

// function areEqual(prevProps, nextProps) {
//   return prevProps.user.name === nextProps.user.name && prevProps.list === nextProps.list;
// }
