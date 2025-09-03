import { Link } from "react-router"

const ChooseAuth = () => {
    return (
        <div className="buttons">
            <Link to={'/login'} className="btn">Login</Link>
            <Link to={'signup'} className="btn">Signup</Link>
            <Link to={'/start-game-guest'} className="btn">Play as a Guest</Link>
        </div>
    )
}

export default ChooseAuth