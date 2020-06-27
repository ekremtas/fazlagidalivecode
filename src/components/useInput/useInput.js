import React, { useState } from "react";
import {
  Input,
} from "reactstrap";

const useInput = ({ type, firstvalue /*...*/ }) => {
  const [value, setValue] = useState(firstvalue ? firstvalue : null);
  const input = (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
};

export default useInput;
