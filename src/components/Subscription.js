import Card from "./Card";

const Subscription = () => {

  const faBatteryEmpty = "battery-empty";
  const faBatteryHalf = "battery-half";
  const faBatteryFull = "battery-full"

    return(
      <div className="subscription m-2">
        <div  className="subscription grid">
            <Card title={"Basic Subscription"} icon = {faBatteryEmpty} num={1}/>
            <Card title={"Platinum Subscription"} icon = {faBatteryHalf} num={2}/>
            <Card title={"Gold Subscription"} icon = {faBatteryFull} num={3}/>
        </div>
      </div>
    )
}

export default Subscription;