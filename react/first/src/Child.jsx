import React from "react";

const Child = (props) => {
  const handelChange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handelChange}
        type="text"
        name="name"
        id=""
        placeholder="enter your name"
      />
      <p>value of name in child :{props.name}</p>
    </div>
  );
};

export default Child;
