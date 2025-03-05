import { createContext, useContext, useState, ReactNode } from "react";
import {User} from "@supabase/supabase-js";

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    balance: number;
    setBalance: (balance: number) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: (user: User | null) => {},
    balance: 0,
    setBalance: (balance: number) => {},
    logout: () => {}
});

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [balance, setBalance] = useState<number>(0)

    function logout() {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, setUser, balance, setBalance, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
