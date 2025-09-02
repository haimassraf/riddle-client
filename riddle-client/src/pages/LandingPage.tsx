import { Link, Outlet } from "react-router"

const LandingPage = () => {
    return (
        <div className="loginPage">
            <h1>Welcome to Riddle App</h1>
            <div className="buttons">
                <Link to={'login'}>Login</Link>
                <Link to={'signup'}>Signup</Link>
                <Link to={'/start-game-guest'}>Play as a Guest</Link>
                <Outlet/>
            </div>
        </div>
    )
}

export default LandingPage