import React from 'react';
import './login-form.css';

const data = [
    {
        email: "user1@gmail.com",
        password: "password1"
    },
    {
        email: "user2@gmail.com",
        password: "password2"
    },
    {
        email: "user3@gmail.com",
        password: "password3"
    }
];

export const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = data.find(item => item.email === email);
        if (user) {
            if (password === user.password) {
                alert(`Bạn đã đăng nhập với tài khoản: ${email} thành công!`);
            } else {
                alert('Mật khẩu không chính xác');
                setPassword('');
            }
        } else {
            alert(`Người dùng với email ${email} không tồn tại`);
            setPassword('');
        }
    };

    return (<div>
        <section className="section">
            <div className="flex">
                <div className="form-wrapper">
                    <div className="header">
                        <h1 className="text-xl">Sign in to your account</h1>
                        <form onSubmit={handleSubmit} className="form-with-input">
                            <div className="form-email">
                                <label htmlFor="email" className="block">Your email</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50"
                                    placeholder="user@email.com"
                                    required
                                />
                            </div>
                            <div className="form-password">
                                <label htmlFor="password" className="block">Password</label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50"
                                    required
                                />
                            </div>
                            <div className="section-remember-me">
                                <div className="radio-remember-me">
                                    <div className="flex">
                                        <input id="remember" type="checkbox" className="w-4"/>
                                    </div>
                                    <div className="ml-3">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm">Forgot password?</a>
                            </div>
                            <button className="submit-btn">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>);
};
LoginForm.prototype = {};
LoginForm.defaultProps = {};