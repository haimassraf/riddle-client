import { Outlet } from "react-router"

const Index = () => {
    return (
        <>
            <header>
                <nav>
                    <section>
                        <title>Riddle Game</title>
                        <h3 className="userName">Haim</h3>
                        <p className="highScore">2.4</p>
                    </section>
                    <section>
                        <button>Logout</button>
                    </section>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Index