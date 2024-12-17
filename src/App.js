import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoTracker = () => {
  const [cryptos, setCryptos] = useState([]); // Состояние для данных
  const [expandedCrypto, setExpandedCrypto] = useState(null); // Состояние для отслеживания раскрытого элемента
  const [search, setSearch] = useState("");

  // Получение данных с API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      setCryptos(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Логика раскрытия элемента
  const toggleCrypto = (id) => {
    if (expandedCrypto === id) {
      setExpandedCrypto(null); // Скрыть элемент
    } else {
      setExpandedCrypto(id); // Показать элемент
    }
  };

  // Фильтрация по поиску
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Cryptocurrency Prices</h1>
      <button className="update-btn" onClick={fetchData}>
        Update
      </button>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredCryptos.map((crypto) => (
          <li key={crypto.id}>
            <div
              onClick={() => toggleCrypto(crypto.id)} // Логика для кнопки "+"
              style={{ cursor: "pointer" }}
            >
              <strong>{crypto.name}</strong>{" "}
              {expandedCrypto === crypto.id ? "-" : "+"}
            </div>
            {expandedCrypto === crypto.id && (
              <div>
                <p>
                  <strong>Symbol:</strong> {crypto.symbol}
                </p>
                <p>
                  <strong>Price USD:</strong> {crypto.price_usd}
                </p>
                <p>
                  <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
                </p>
                <p>
                  <strong>Percent Change 24H:</strong> {crypto.percent_change_24h}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoTracker;
