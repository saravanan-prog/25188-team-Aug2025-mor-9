export default function InputChangeEvent(){

   const changeEvent = (event) => {
       console.log("Event ====>",event.target.value)
   }

   const chooseFruit = (event) => {
      alert("You choosed Fruit is = " + event.target.value)
   }


    return(
        <div className="base-container">
            <div className="heading">
                <h1> Input  Change Event </h1>
            </div>

            <div className="input-change">
                <input type="text" onChange = {changeEvent} />
            </div>

            <div className="select-box">
                <p> Choose Any fruits </p>
                <select onChange = {chooseFruit}>
                    <option>choose any Fruits</option>
                    <option value = "apple">Apple</option>
                    <option value = "orange">Orange</option>
                    <option value = "pine-apple">Pineapple</option>
                </select>
            </div>
        </div>
    )
}