// Code Keypad Component Here

function Keypad (){
    const passwordChange = () => {
        console.log("Entering password...");
    };

    return (
        <div>
            <input 
                type="password"
                onChange={passwordChange}
            />
        </div>
    )
}

export default Keypad;