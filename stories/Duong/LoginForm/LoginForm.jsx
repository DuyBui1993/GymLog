import React from "react";
import './login-form.css'
import e from "@chromatic-com/storybook";

export const LoginForm = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return <div>
        <section className="section">
            <div>
                <a className="logo">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                         alt="logo"/>
                    Duongne
                </a>
                <div className="form-wrapper">
                    <div className="header">
                        <h1>Sign in to your account</h1>

                        <form className="form-input">
                            <div className="form-email">
                                <label htmlFor="email">Your Email</label>
                                <input value={email}
                                       onChange={e => {
                                           setEmail(e.target.value);
                                }} type="email" name="email" id="email" placeholder="name@gmail.com" required="" />
                            </div>
                            <div className="form-password">
                                <label htmlFor="password">Your Password</label>
                                <input value={password}
                                       onChange={e => {
                                           setPassword(e.target.value);
                                }} type="password" name="password" id="password" placeholder="........" required="" />
                            </div>
                            <div className="remember-me">
                                <div className="radio-remember-me">
                                    <div>
                                        <input id="remember" aria-describedby="remember" type="checkbox" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                </div>
                                <a href="#">Forgot password</a>
                            </div>
                            <button
                                onClick={() => {
                                    alert("You have logged in with account: " + email + " and password: " + password + " successfully !!!")
                                }}
                                className="submit-button">Sign in</button>
                            <p>
                                Don't have an account yet?
                                <a href="#">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
LoginForm.prototype = {};
LoginForm.defaultProps = {};