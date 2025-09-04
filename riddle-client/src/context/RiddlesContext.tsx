import { createContext, useContext, useState } from "react"

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

type RiddlesContextType = {
    riddles: Riddle[] | null,
    setRiddle: (riddle: Riddle[] | null) => void
}

const RiddleContext = createContext<RiddlesContextType | undefined>(undefined);

export function RiddleProvider({ children }: { children: React.ReactNode }) {
    const [riddles, setRiddles] = useState<Riddle[] | null>(null);
    return (
        <RiddleContext.Provider value={{ riddles: riddles, setRiddle: setRiddles }}>
            {children}
        </RiddleContext.Provider>
    )
}

export function useRiddles(){
    const context = useContext(RiddleContext);
    if (!context) throw new Error("useRiddle must be used within RiddleProvider")
    return context;
}