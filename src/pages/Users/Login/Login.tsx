import { Grid, TextField, Typography, Button } from '@mui/material'
import { MUICheckbox } from '../../../components/MUICheckbox/MUICheckbox'

export const Login = () => {
	return (
		<div>
			<Grid
				container
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					width: '700px',
					height: '500px',
					border: '1px solid #ccc',
					borderRadius: '15px',
				}}
			>
				<form>
					<Grid item md={12}>
						<Typography
							sx={{ color: 'gray', textAlign: 'center', marginBottom: '10px' }}
						>
							Iniciar Sesión
						</Typography>
					</Grid>
					<Grid xs={12} md={12} item sx={{ marginBottom: '20px' }}>
						<TextField
							type="text"
							variant="outlined"
							placeholder="Usuario *"
							fullWidth
						/>
					</Grid>
					<Grid item>
						<TextField
							type="password"
							variant="outlined"
							placeholder="Contraseña *"
							fullWidth
						/>
					</Grid>
					<Grid item>
						<MUICheckbox />
						<Typography sx={{ color: 'gray', display: 'inline' }}>
							Recuérdame
						</Typography>
					</Grid>
					<Grid item>
						<Button size="large" variant="contained" sx={{ width: '100%' }}>
							INICIAR SESIÓN
						</Button>
					</Grid>
					<Grid>
						<Typography sx={{ color: 'blue', marginTop: '20px' }}>
							¿No tienes una cuenta? Regístrese
						</Typography>
					</Grid>
				</form>
			</Grid>
		</div>
	)
}
