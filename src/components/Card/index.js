import React from "react";
import { CardWrapper } from "./styles";

const Card = ({
  children,
  style,
  height,
  width,
  padding,
  margin,
  borderRadius,
  variant,
  className,
  onClick,
  ...props
}) => {
  // Variantes predefinidas
  const variantStyles = {
    elevated: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    outlined: {
      border: "1px solid #ddd",
    },
    flat: {
      boxShadow: "none",
    },
  };

  return (
    <CardWrapper
      style={{
        ...variantStyles[variant],
        height,
        width,
        padding,
        margin,
        borderRadius,
        ...style,
      }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
