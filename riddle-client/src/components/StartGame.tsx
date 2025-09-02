const StartGame = ({ isGuest = false }: { isGuest: boolean }) => {
    return (
        <div>
            <h1>Is Guest? {isGuest ? 'true' : 'false'}</h1>
        </div>
    )
}

export default StartGame