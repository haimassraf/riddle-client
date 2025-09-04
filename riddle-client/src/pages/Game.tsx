import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import makeRequest from '../utils/makeRequest';
import ShowRiddle from './ShowRiddle';

const Game = () => {

  type Riddle = {
    id: string,
    name: string,
    taskDescription: string,
    correctAnswer: string,
    difficulty: string,
    hint?: string,
    timeLimit?: number
    choices?: string[]
  }

  const navigate = useNavigate();
  const { difficulty } = useParams<{ difficulty: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [riddleIndex, setRiddleIndex] = useState<number>(0);
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [message, setMessage] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const fetchRiddles = async () => {
      setLoading(true);
      try {
        const allRiddlesByLevel: Riddle[] = await makeRequest(`/riddle/riddleByLevel/${difficulty}`);
        if (!allRiddlesByLevel[0].name) {
          setMessage("Faild to get data")
        }
        setRiddles(allRiddlesByLevel);
      } catch (err) {
        setMessage("Problem with getting the riddles, please try again later");
      }
      setLoading(false);
    };
    fetchRiddles();
  }, [difficulty]);


  useEffect(() => {
    if (riddleIndex >= riddles.length && riddles.length > 0) {
      navigate('/index');
    }
  }, [riddleIndex]);


useEffect(() => {
  if (!loading) {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }
}, [loading]);


  return (
    <div className='riddlePage'>
      <div className="timer">
        <p>Time Passed: {time} Secound</p>
      </div>
      {loading && <p className='loading'>Loading...</p>}
      {message && <p className='failed'>{message}</p>}
      {!loading && riddles[riddleIndex] && (
        <ShowRiddle
          riddle={riddles[riddleIndex]}
          setIndex={setRiddleIndex}
        />
      )}
    </div>
  )
}

export default Game;
