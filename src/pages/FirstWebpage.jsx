import useTitle from "../custom-hooks/useTitle"

export default function FirstWebpage(){

    const candidateName1 = useTitle("saravanan","M")
    const candidateName2 = useTitle("Laxshmi","F")

    return <div className="conatainer m-3">
        <div className="show-name">
            <p> { candidateName1 } </p>
            <p> { candidateName2 } </p>
        </div>
    </div>
}