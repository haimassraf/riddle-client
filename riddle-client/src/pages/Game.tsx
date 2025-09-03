import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'
import makeRequest from '../utils/makeRequest';

const Game = () => {
  const { difficulty } = useParams<{ difficulty: string }>();
  const [riddles, setRiddles] = useState(null)
  const [loading, setLoadin] = useState<boolean>(false)

  useEffect(() => {
    const fetchRiddles = async () => {
      setLoadin(true)
      const allRiddles = await makeRequest(`/riddle/riddleByLevel/${difficulty}`);
      setLoadin(false)
      setRiddles(allRiddles);
    };
    fetchRiddles();
  }, [])
  console.log(riddles)
  return (
    <>
      <h3>{difficulty || 'NONE'}</h3>
      <Link to={'/index/end-game'}>end game</Link>
      {loading && <p className='loading'>Loading</p>}
    </>
  )
}

export default Game