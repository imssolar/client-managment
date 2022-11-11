import { createContext } from 'react'
import { LoginUser, User } from '../../interfaces/Users'

interface contextProps {
	user: User | null
	token: string | null
	loginUser: (userToLogin: LoginUser) => void
	registerUser: (userToRegister: User) => void
}

export const AuthContext = createContext({} as contextProps)
