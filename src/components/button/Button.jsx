import React from "react";

const Button = ({text}) => {
  return (
    <div>
      <button className="px-[20px] text-[18px] font-bold py-2 border-[1px] rounded-2xl">
        {text}
      </button>
    </div>
  );
};

export default Button;
