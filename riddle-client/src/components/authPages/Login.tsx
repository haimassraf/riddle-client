import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import makeRequest from "../../utils/makeRequest";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loadin, setLoadin] = useState<boolean>(false);
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                name: name.toLowerCase(),
                password
            }
            setLoadin(true);
            const res = await makeRequest('/auth/login', 'POST', body);
            setLoadin(false)
            if (res.token) {
                setUser(res.user)
                alert('Logged in successfully');
                navigate("/index");
            } else {
                setMessage(res);
            }
        } catch (err: any) { setMessage(`Error: ${err.message}`) }
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    User Name
                    <input
                        id="name"
                        required
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        required
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="submit">Login</button>
                <Link to="/signup">New? Please signup first</Link>
                {loadin && <p className="loading">Loading...</p>}
                {message && <p className="failed">{message}</p>}
            </form>
        </>
    );
};

export default Login;
