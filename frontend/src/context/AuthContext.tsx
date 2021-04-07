import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';
import { IUsers } from '../services/Interfaces';

interface IAuthContextState {
    token: ITokenState;
    signIn({ username, password }: IUserData): Promise<void>;
    userLogged(): boolean;
    user:IUsers;
}

interface IUserData {
    username: string;
    password: string;
}

interface ITokenState {
    token: string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUsers>({} as IUsers);
    const [token, setToken] = useState<ITokenState>(() => {
        const token = localStorage.getItem('@Permission:token');

        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token };
        }
        return {} as ITokenState;
    });

    const signIn = useCallback(async ({ username, password }: IUserData) => {
        const response = await api.post('/auth', { username, password });
        setUser(response.data);
        const { token } = response.data;

        setToken(token);

        localStorage.setItem('@Permission:token', token);
    }, []);

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@Permission:token');
        if (token) return true;
        return false;
    }, []);

    return (
        <AuthContext.Provider value={{ token, signIn, userLogged, user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContextState {
    const context = useContext(AuthContext);
    return context;
}

export { useAuth, AuthProvider };