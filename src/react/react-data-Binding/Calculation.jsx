export default function Calculation(){

    const heading = "Calculator"
    const createdBy = "shreepal"

    const collagefees= 100
    const hostelfees = 200

    return <div>
         <div className="heading">
             <h1>{ heading }</h1>
         </div>

         <div>
             <p> Created By : {createdBy} </p>
         </div>
        <p> Additon : { collagefees + hostelfees } </p>
    
    </div>
}