import { Outlet } from "react-router"

const LandingPage = () => {
    return (
        <div className="loginPage">
            <h1>Welcome to Riddle App</h1>
            <Outlet />
        </div>
    )
}

export default LandingPage