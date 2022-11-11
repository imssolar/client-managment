import React from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { GiHazardSign } from 'react-icons/gi'
export const Error404 = () => {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh' }}
			>
				<Grid>
					<Stack direction="row" spacing={3}>
						<GiHazardSign
							fontSize="80px"
							style={{
								color: 'dodgerblue',
							}}
						/>
						<Typography
							variant="h2"
							sx={{ color: 'dodgerblue', margin: '16px', fontSize: '75px' }}
						>
							404
						</Typography>
					</Stack>
				</Grid>
				<Grid item>
					<Typography variant="h3">Oops... Page Not Found!</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}
