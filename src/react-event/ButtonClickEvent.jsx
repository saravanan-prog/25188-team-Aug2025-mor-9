export default function ButtonClickEvent() {

    const handleNameChange = (event) => {
        console.log("Driver Name ====>", event.target.value);
    }

    const chooseCar = (event) => {
        alert("You selected Car = " + event.target.value);
    }

    return (
        <div className="base-container">
            <div className="heading">
                <h1>  Car Selection Form </h1>
            </div>

            <div className="input-change">
                <p>Enter Driver Name:</p>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    onChange={handleNameChange} 
                />
            </div>

            <div className="select-box" style={{ marginTop: "20px" }}>
                <p>Select Your Car:</p>
                <select onChange={chooseCar}>
                    <option>Choose a Car</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Tesla">Tesla</option>
                </select>
            </div>
        </div>
    )
}
