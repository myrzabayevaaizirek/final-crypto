import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptos, searchTerm }) => {
  if (!cryptos || cryptos.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {cryptos
        .filter(
          (crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((crypto) => (
          <CryptoItem key={crypto.id} crypto={crypto} />
        ))}
    </div>
  );
};
    
export default CryptoList;
