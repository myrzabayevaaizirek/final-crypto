import React, { useState } from "react";
import CustomTooltip from "./Tooltip";

const CryptoItem = ({ crypto }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="crypto-item" onClick={() => setExpanded(!expanded)}>
      <div style={{ cursor: "pointer" }}>
        {crypto.name} {expanded ? "-" : "+"}
      </div>
      {expanded && (
        <div>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price USD: {crypto.price_usd}</p>
          <p>Price BTC: {crypto.price_btc}</p>
          <p>
            Market Cap USD: <CustomTooltip /> {crypto.market_cap_usd}
          </p>
          <p
            style={{
              color: crypto.percent_change_24h >= 0 ? "green" : "red",
            }}
          >
            Percent Change 24H: {crypto.percent_change_24h}%
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoItem;
