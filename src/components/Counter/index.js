import React, { useState, useEffect } from "react";
import { Svg } from "@components"; // Ensure this is correctly imported
import { Label, Button, Quantity, QuantityWrapper } from "./styles";

// import aleft from "@assets/icons/aleft.svg";
// import aright from "@assets/icons/aright.svg";

const QuantityComponent = ({
  value = 1,
  step = 1,
  max = 10,
  getValue,
  label = null,
  allowZero = false,
  styles = {},
  ...props
}) => {
  const [count, setCount] = useState(1);

  const rest = () => {
    let v;
    if (allowZero) {
      v = count - step > -1 ? count - step : step;
    } else {
      v = count - step > 0 ? count - step : step;
    }
    setCount(v);
  };

  const add = () => {
    const v = count + step < max ? count + step : max;
    setCount(v);
  };

  useEffect(() => {
    if (getValue) {
      getValue(count);
    }
  }, [count, getValue]);

  useEffect(() => {
    if (value !== undefined) {
      setCount(value);
    }
  }, [value]);

  return (
    <Quantity {...props}>
      <QuantityWrapper {...styles}>
        <Button link onClick={rest}>
          {/* <Svg icon={aleft} wsvg={20} /> */}
        </Button>
        {label ? label(count) : <Label>{count}</Label>}
        <Button link onClick={add}>
          {/* <Svg icon={aright} wsvg={20} /> */}
        </Button>
      </QuantityWrapper>
    </Quantity>
  );
};

export default QuantityComponent;
