import React from 'react';
import './login-form.css';

export const LoginForm = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Vui lòng điền đầy đủ thông tin email và password');
            return;
        }
        setError('');
        console.log('Email:', email, 'Password:', password);
        alert("Bạn đã đăng nhập với tài khoản: " + email + " và mật khẩu: " + password + " thành công!");
    };

    return (
        <div>
            <section className="section">
                <div className="flex">
                    <div className="form-wrapper">
                        <div className="header">
                            <h1>Sign in to your account</h1>
                            <form className="form-with-input" onSubmit={handleSubmit}>
                                <div className="button-container">
                                    <a href="#" className="btn">
                                        <img
                                            src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
                                            alt="Google Logo"/> Log in with Google
                                    </a>
                                    <a href="#" className="btn">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                            alt="Apple Logo"/> Log in with Apple
                                    </a>
                                </div>
                                <div className="separator">
                                    <div className="line"></div>
                                    <span className="text">or</span>
                                    <div className="line"></div>
                                </div>
                                <div className="form-email">
                                    <label htmlFor="email">Your email</label>
                                    <input value={email} onChange={e => setEmail(e.target.value)}
                                           type="email" name="email" id="email" placeholder="name@company.com"/>
                                </div>
                                <div className="form-password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type="password" name="password" id="password" placeholder="••••••••"/>
                                </div>
                                <div className="section-remember">
                                    <div className="radio-remember">
                                        <div className="flex items-center">
                                            <input id="remember" aria-describedby="remember" type="checkbox"/>
                                        </div>
                                        <div className="ml-3">
                                            <label htmlFor="remember">Remember</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm">Forgot password?</a>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <button type="submit" className="submit-btn">Sign in</button>
                                <p className="text-sm">
                                    Don’t have an account yet? <a href="#"  className="font-medium">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};