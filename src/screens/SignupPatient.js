import React, { useState , useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SignupPatient.css';

export default function Signuppatient() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", dateOfBirth: "", gender: "" });
    const [apiUrl, setApiUrl] = useState("");

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;
        setApiUrl(url);
        console.log(`API URL: ${url}`); // This should log the correct URL
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const apiUrl = process.env.REACT_APP_API_URL;
        console.log(apiUrl); 
        const response = await fetch('http://localhost:5000/api/login_patient' || `${apiUrl}/api/signup_patient`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid Credentials")
        }
        else {
            alert("You have successfully signed up!")
        }
        // Handle response
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div><Navbar /></div>
            <main className='main'>
                <form className='signup_patient' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input className='name field' type='text' id='name' name='name' value={credentials.name} placeholder='Enter your name' onChange={onChange} />
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" className='field' value={credentials.gender} onChange={onChange}>
                        <option value=" ">--Select a option--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <label htmlFor="dateOfBirth">D.O.B</label>
                    <input className='date field' type='date' name='dateOfBirth' id='dateOfBirth' value={credentials.dateOfBirth} onChange={onChange} />
                    <label htmlFor="email">Email</label>
                    <input className='email field' type='email' name='email' id='email' placeholder='Enter your email' value={credentials.email} onChange={onChange} />
                    <label htmlFor="password">Password</label>
                    <input className='password field' type='password' name='password' id='password' placeholder='Enter your password' value={credentials.password} onChange={onChange} />
                    <input type="submit" className="butn login_btn" />
                </form>
            </main>
            <div><Footer /></div>
        </>
    )
}
