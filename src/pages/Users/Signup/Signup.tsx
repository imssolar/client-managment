import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import { LoginUser } from '../../../interfaces/Users'

type formValues = {
	name: string
	email: string
	password: string
}

export const Signup = () => {
	/*Ejemplo de formulario sin React-hook-form*/

	const [signUpData, setSignUpData] = useState<formValues>({
		name: '',
		email: '',
		password: '',
	})

	const handleData = (e: ChangeEvent<HTMLInputElement>) => {
		setSignUpData({
			...signUpData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(signUpData)
		setSignUpData({
			name: '',
			email: '',
			password: '',
		})
	}

	return (
		<Container maxWidth="sm">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh' }}
			>
				<Grid item>
					<Typography
						variant="h4"
						textAlign="center"
						sx={{ color: 'gray', mt: 1, mb: 1 }}
					>
						Registro
					</Typography>
					<Box component="form" onSubmit={handleSubmit}>
						<TextField
							sx={{ mt: 2, mb: 1.5 }}
							label="Nombre Usuario"
							required
							margin="normal"
							fullWidth
							type="text"
							name="name"
							onChange={handleData}
							value={signUpData.name}
						/>
						<TextField
							sx={{ mt: 1.5, mb: 1.5 }}
							fullWidth
							label="Dirección de correo"
							required
							margin="normal"
							type="text" /*validarlo en el backend*/
							name="email"
							onChange={handleData}
							value={signUpData.email}
						/>
						<TextField
							sx={{ mt: 1.5, mb: 1.5 }}
							fullWidth
							label="Contraseña"
							required
							margin="normal"
							type="password"
							name="password"
							onChange={handleData}
							value={signUpData.password}
						/>

						<Button
							type="submit"
							variant="contained"
							fullWidth
							sx={{ mt: 1.5, mb: 2.5, background: 'dodgerblue' }}
						>
							REGISTRARME
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}
