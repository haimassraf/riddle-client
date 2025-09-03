import { useState } from "react"
import { useNavigate } from "react-router"

const ChooseDifficulty = () => {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState<string>('')
    const [message, setMessage] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!difficulty){
            setMessage("Please Choose a Difficulty")
            return
        }
        setMessage("")
        navigate(`/index/game/${difficulty}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Choose Difficulty
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="">-- choose difficulty --</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <button type="submit">Start Game</button>
            {message && <p className="failed">{message}</p>}
        </form>
    )
}

export default ChooseDifficulty