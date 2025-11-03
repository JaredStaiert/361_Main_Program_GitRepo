import {createContext, useContext} from "react";

export interface User {
    email: string,
    passwordHash: string,
}

export interface Credentials {
    email: string;
    passwordHash: string;
}

export type LoginFunction = (credentials: Credentials) => void;
export type LogoutFunction = () => void;

export interface AuthProviderInterface {
    user: User | null;
    login: LoginFunction;
    logout: LogoutFunction;
}

export const AuthContext = createContext<AuthProviderInterface | undefined>(undefined);

export function useAuth(): AuthProviderInterface {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within useAuth');
    }
    return context;
}