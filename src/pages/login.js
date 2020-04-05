import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';

const Login = () => {
    const [name, setName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name,
             }) 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.localStorage.setItem("birdie", data.data)
            navigate("/")
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", padding: "15px", borderColor: "2px solid white", margin: "auto" }}>
                <input type="text" name="userName" id="LoginEmail" placeholder="Username" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setName(e.target.value)} />
                <button style={{ color: "black" }} type="submit">Submit</button>
                <div>
                    <h3>Signup Here </h3>
                    <Link to="/signup" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.54)', margin: '10px'}}>signup</Link> 
                </div>
            </form>
        </div>

    );
}

export default Login;
