import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            <Link to={'choose-difficulty'} className='btn' >Start Game</Link>
            <Link to={'view-leader-board'} className='btn'>View Leader Board</Link>
            <Link to={'setting'} className='btn'>Setting</Link>
        </>
    )
}

export default Home