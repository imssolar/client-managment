import React, { useReducer } from 'react'
import { LoginUser, User } from '../../interfaces/Users'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import api from '../../api/api'

//children
interface stateProps {
	children: React.ReactNode
}

//interface authState
export interface authState {
	user: User | null
	token: string | null
}
//initial State

const INITIAL_STATE: authState = {
	user: null,
	token: '',
}

export const AuthState = ({ children }: stateProps) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

	const loginUser = async (userToLogin: LoginUser) => {
		console.log('test')
	}

	const registerUser = async (user: User) => {
		console.log('test')
	}

	return (
		<AuthContext.Provider
			value={{
				...state,
				loginUser,
				registerUser,
			}}
		></AuthContext.Provider>
	)
}
