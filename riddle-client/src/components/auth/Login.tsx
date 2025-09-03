import { Link } from 'react-router'

const Login = () => {
    return (
        <>
            <h2>login</h2>
            <form action="">
                <input type="text" placeholder='name' />
                <input type="password" placeholder='password' />
                <Link to={'/index'}>Login</Link>
            </form>
        </>
    )
}

export default Login