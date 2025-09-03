import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import makeRequest from "../../utils/makeRequest";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [matchPassword, setMatchPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== matchPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const body = {
        name: name.toLowerCase(),
        password
      }
      const res = await makeRequest('/auth/signup', 'POST', body);
      if (res.token) {
        alert('Sign up successfully');
        navigate('/index')
      } else {
        setMessage(res);
      }
    } catch (err: any) { setMessage(err.message) }
  };

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
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

        <label htmlFor="matchPassword">
          Match Password
          <input
            id="matchPassword"
            required
            type="password"
            placeholder="match password"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
          />
        </label>

        <button type="submit">Signup</button>
        <Link to="/login">Already have an account? Please login</Link>

        {message && <p className="failed">{message}</p>}
      </form>
    </>
  );
};

export default Signup;
