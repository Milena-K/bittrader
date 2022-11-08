import "./styles/Widget.css";
import { AdvancedChart } from "react-tradingview-embed";

const Widget = () => {
  return (
    <div className="widget">
      <AdvancedChart widgetProps={{ "theme": "dark" }} />
    </div>
  )
}

export default Widget;
