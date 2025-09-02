import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <button>
                <Link to={'game'} >Start Game</Link>
            </button>
            <button>
                <Link to={'view-leader-board'} >View Leader Board</Link>
            </button>
            <button>
                <Link to={'setting'} >Setting</Link>
            </button>
        </>
    )
}

export default Home