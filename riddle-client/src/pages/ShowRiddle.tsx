import { useEffect, useState, type FormEvent } from "react";

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

const ShowRiddle = ({ riddle, setIndex }: { riddle: Riddle, setIndex: Function }) => {
    const [answer, setAnswer] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isChoices, setIsChoices] = useState<boolean>(false)

    useEffect(() => {
        if (riddle.choices) {
            setIsChoices(true);
        }
        else {
            setIsChoices(false)
        }
    }, [riddle])

    useEffect(() => {
        setAnswer("");
        setMessage("");
    }, [riddle]);


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!answer) {
            setMessage("Please Enter an Answer")
            return;
        }
        else if (answer !== riddle.correctAnswer) {
            setMessage("Wrong Answer, Please Try Again");
            return;
        }
        setMessage("")
        setIndex((prev: number) => prev + 1);

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>{riddle.name}</h2>
            <h3>{riddle.taskDescription}</h3>
            <label htmlFor="anwer">
                {!isChoices && <input onChange={(e) => setAnswer(e.target.value)} id="anwer" type="text" placeholder="Enter an Anwer" />}
                {isChoices && <div className="choices">
                    {riddle.choices?.map((choice, i) => (
                        <label key={i}>
                            {choice}.
                            <input type="radio" name="answer" checked={answer === choice} value={choice} onChange={(e) => setAnswer(e.target.value)} />
                        </label>
                    ))}
                </div>}
            </label>
            <button type="submit">Send Answer</button>
            {message && <p className="failed">{message}</p>}
        </form>
    )
}

export default ShowRiddle