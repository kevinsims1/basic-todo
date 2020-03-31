import React, { useState } from 'react';
import {navigate} from '@reach/router'


const Signup = () => {
    const [name, setName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/user/create",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name,
             })  
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // window.localStorage.setItem("birdie", data.token)
            navigate("login")
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", padding: "15px", borderColor: "2px solid white", margin: "auto" }}>
                <input type="text" name="userName" id="SignupEmail" placeholder="Username" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setUserName(e.target.value)} />
                <button style={{ color: "black" }} type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Signup;