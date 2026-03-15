import React from "react";
import styles from "../pages/registration.module.css"
import { Link } from "react-router";
import images from "../../assets/images";

const Registration = () => {
    return(
        <>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <Link to="/"><img src={images.logo} alt="Logo" /></Link>
                    <h1>Login</h1>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <span>
                            <label htmlFor="fullname">Full name:</label>
                            <input type="text" id="fullname" name="fullname" required placeholder="Enter your full name"/>
                        </span>
                        <span>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email"/>
                        </span>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
                        </span>
                        <span>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password"/>
                        </span>
                        <button>Register</button>
                    </form>
                    <p style={{textAlign: "center"}}>already have an account? <Link to="/login" style={{textDecoration: "underline"}}>Login</Link></p>
                </div>

                
            </div>
        </>
    );
}

export default Registration;