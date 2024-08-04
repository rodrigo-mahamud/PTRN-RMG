import React from "react";
import { LabelProps } from "@/types";

const Label: React.FC<LabelProps> = React.memo(({ onClick, text, ...rest }) => {
   return (
      <span {...rest} style={{ cursor: onClick ? "pointer" : "default" }} onClick={onClick}>
         {text}
      </span>
   );
});

Label.displayName = "Label"; // Útil para debugging

export default Label;
