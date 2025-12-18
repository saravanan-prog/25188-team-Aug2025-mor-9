import { useSelector } from "react-redux";

export default function SientificCalculator(){

    const data = useSelector((state) => console.log("state====>",state))


    return <div>
        <div className="text-center h1 text-primary">Sientific Calculator</div>
    </div>

}