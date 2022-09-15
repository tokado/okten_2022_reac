import SimpsonComponent from "../components/simpsonComponent/SimpsonComponent"
import {simpsonData} from "../data/simpsonData/SimpsonData"

export default function SimpsonFamily() {
    return (
        <div>
            {
                simpsonData.map(value => <SimpsonComponent key={value.id} item={value}/>)
            }
        </div>
    )
}