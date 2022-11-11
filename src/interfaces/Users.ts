export interface User {
	name: string
	email: string
	password: string
	lastNames: string
	mobile_phone: number
	mobile_other?: number
	date_of_birth: string
	personal_review?: string
	interests?: string
	genre: Gender
	_id?: string
}

export interface LoginUser {
	name: string
	password: string
}

export type Gender = 'M' | 'F'

export type Status = 'AUTHENTICATED' | 'VERIFYING' | 'NO AUTHORIZED'
