import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Signup.css'
import doctor from '../components/images/doctor.jpg'
import patient from '../components/images/patient.jpg'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div><Navbar /></div>
            <main>
                <div className="container-signup">
                    <Link to="/signup-doctor" className='doctor'>
                        <div >
                            <img src={doctor} alt="doctor" />
                            <h2>I am a Doctor</h2>
                        </div>
                    </Link>
                    <Link to="/signup-patient"  className='patient'>
                        <div>
                            <img src={patient} alt="patient" />
                            <h2>I am a Patient</h2>
                        </div>
                    </Link>
                </div>
            </main>
            <div><Footer /></div>
        </>
    )
}
