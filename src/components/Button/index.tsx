import React from "react";

export const Button: React.FC<React.ComponentPropsWithoutRef<"button">> = (
  props
) => {
  return <button {...props} />;
};
