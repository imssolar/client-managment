import React from 'react'
import { Grid, TextField, Typography, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { MUICheckbox } from '../../../components/MUICheckbox/MUICheckbox'

interface FormProps {
	username: string
	password: string
}

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormProps>()

	const onSubmit = handleSubmit((data) => {
		console.log(data)
		alert('Exito')
	})

	return (
		<div>
			<Grid
				container
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					width: '100vw',
					height: '100vh',
					border: '1px solid #ccc',
					borderRadius: '15px',
				}}
			>
				<form onSubmit={onSubmit}>
					<Grid item md={12}>
						<Typography
							sx={{ color: 'gray', textAlign: 'center', marginBottom: '10px' }}
						>
							Iniciar Sesión
						</Typography>
					</Grid>
					<Grid xs={12} md={12} item sx={{ marginBottom: '20px' }}>
						<TextField
							{...register('username', {
								required: {
									value: true,
									message: 'Campo requerido',
								},
							})}
							type="text"
							name="username"
							variant="outlined"
							placeholder="Usuario *"
							fullWidth
						/>
						{errors.username && (
							<Typography sx={{ color: 'error.main' }}>
								{errors.username.message}
							</Typography>
						)}
					</Grid>
					<Grid item>
						<TextField
							{...register('password', {
								required: {
									value: true,
									message: 'Campo requerido',
								},
							})}
							type="password"
							name="password"
							variant="outlined"
							placeholder="Contraseña *"
							fullWidth
						/>
						{errors.password && (
							<Typography sx={{ color: 'error.main' }}>
								{errors.password.message}
							</Typography>
						)}
					</Grid>
					<Grid item>
						<MUICheckbox />
						<Typography sx={{ color: 'gray', display: 'inline' }}>
							Recuérdame
						</Typography>
					</Grid>
					<Grid item>
						<Button
							type="submit"
							size="large"
							variant="contained"
							sx={{ width: '100%' }}
						>
							INICIAR SESIÓN
						</Button>
					</Grid>
					<Grid>
						<Typography sx={{ marginTop: '20px' }}>
							<Link
								style={{ textDecoration: 'none', color: 'dodgerblue' }}
								to={'/register'}
							>
								¿No tienes una cuenta?
								<br /> Regístrese
							</Link>
						</Typography>
					</Grid>
				</form>
			</Grid>
		</div>
	)
}
