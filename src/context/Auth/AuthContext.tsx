import { createContext } from 'react'
import { User } from '../../interfaces/Users'

interface contextProps {
	user: User | null
	token: string | null
	loginUser: (userToLogin: User) => void
	registerUser: (userToRegister: User) => void
}

export const AuthContext = createContext({} as contextProps)
