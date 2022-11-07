import "./styles/Stats.css";
const Stats = () => {
  //TODO: get live data for coin value
  return (
    <div className="stats">
      <div>
        <h2>BITCOIN PRICE</h2>
        <h4>1337 USD</h4>
      </div>
      <div>
        <h2>BITCOIN PRICE</h2>
        <h4>1337 EUR</h4>
      </div>
      <div>
        <h2>24h VOLUME</h2>
        <h4>80085 BTC</h4>
      </div>
      <div>
        <h2>ACTIVE TRADERS</h2>
        <h4>1,010,000</h4>
      </div>
    </div>
  )
}

export default Stats;
