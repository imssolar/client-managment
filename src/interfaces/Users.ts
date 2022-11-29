export interface Client {
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
	image:string
}

export interface User {
	username: string
	email:string
	password: string
}

export type Gender = 'M' | 'F'

export type Status = 'AUTHENTICATED' | 'VERIFYING' | 'NO AUTHORIZED'

//const numStr:(number | string )[]    = [2,3,"o",3]
