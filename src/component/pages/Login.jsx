import React from "react";
import styles from "../pages/login.module.css"
import { Link } from "react-router";    
import images from "../../assets/images";

const Login = () => {
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
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email"/>
                        </span>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
                        </span>
                        <button>Register</button>
                    </form>
                    <p style={{textAlign: "center"}}>don't have an account? <Link to="/register" style={{textDecoration: "underline"}}>Register</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;