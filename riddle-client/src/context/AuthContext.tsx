import { createContext, useContext, useState } from "react"

type Rol = "admin" | "user"

type User = {
    created_at: string,
    high_score?: number,
    id: number,
    name: string,
    password: string,
    rol: Rol
}

type AuthContextType = {
    user: User | null,
    setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context;
}