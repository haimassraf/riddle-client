import { Link, Outlet } from "react-router"
import { useAuth } from "../context/AuthContext"

const Index = () => {
    const { user } = useAuth();
    return (
        <div className="gamePage">
            <header>
                <section>
                    <title>Riddle Game</title>
                    <h3 className="userName">{user?.name || 'Guest'}</h3>
                    <p className="highScore">High Score: '{user?.high_score || 'Not Played'}'</p>
                </section>
                <section>
                    <Link className="btn logout" to={'/'} >Logout</Link>
                </section>
            </header>
            <main>
                <h1>Riddle Game</h1>
                <Outlet />
            </main>
        </div>
    )
}

export default Index