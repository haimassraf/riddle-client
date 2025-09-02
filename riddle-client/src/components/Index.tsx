import { Link, Outlet } from "react-router"

const Index = () => {
    return (
        <>
            <header>
                <section>
                    <title>Riddle Game</title>
                    <h3 className="userName">Haim</h3>
                    <p className="highScore">2.4</p>
                </section>
                <section>
                    <button>
                        <Link to={'/landing-page'} >Logout</Link>
                    </button>
                </section>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Index