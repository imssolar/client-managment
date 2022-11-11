import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export const UpperMenu = () => {
	return (
		<Container maxWidth="lg">
			<Grid container>
				<Grid item>
					<Typography>COMPAÑIA PRUEBA</Typography>
				</Grid>
				<Grid>
					<Typography>NOMBRE USUARIO</Typography>
					<Button variant="contained">SALIR</Button>
				</Grid>
			</Grid>
		</Container>
	)
}
