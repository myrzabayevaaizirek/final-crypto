import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = () => {
  return (
    <div>
      <span
        data-tooltip-id="marketCapTooltip"
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        ℹ️
      </span>
      <Tooltip
        id="marketCapTooltip"
        place="top"
        effect="solid"
        style={{ backgroundColor: "#555", color: "#fff" }}
      >
        The market capitalization of a cryptocurrency is calculated by
        multiplying the number of coins in circulation by the current price.
      </Tooltip>
    </div>
  );
};

export default CustomTooltip;
