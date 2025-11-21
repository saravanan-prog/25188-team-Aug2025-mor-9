export default function ButtonClickEvent(){

    const clickMe = () => {
        alert("Button Event is Triggred")
    }

    const welcomemsg = (candidateName) => {

        alert("Welcome to React Js world " + candidateName )
    }


    return(
        <div className="base-container">
            <div className="heading">
                <h1> Button Click Event </h1>
            </div>

            <div className="button">
                <button onClick={clickMe}> Click me  </button>
                <button onClick={ () => welcomemsg("saravanan") }> Welcome Message </button>
            </div>
        </div>
    )
}