import { User, Client } from '../../interfaces/Users'
import { authState } from './AuthState'

type AuthActionTypes =
	| { type: 'LOGIN_USER'; payload: User }
	| { type: 'GET_USERS'; payload: Client[] }

export const AuthReducer = (
	state: authState,
	action: AuthActionTypes
): authState => {
	switch (action.type) {
        
	case 'LOGIN_USER':
		return {
			...state,
			user: action.payload,
		}

	default:
		return state
	}
}
