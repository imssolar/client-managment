import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { BiExit } from 'react-icons/bi'

export const UpperMenu = () => {
	const handleClick = () => {
		console.log('Salir!')
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{ borderBottom: '3px solid dodgerblue', backgroundColor: 'navy' }}
			>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						COMPAÑIA DE CLIENTES -
					</Typography>

					<IconButton
						size="medium"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2, backgroundColor: 'whitesmoke' }}
						onClick={handleClick}
					>
						<BiExit style={{ color: 'black' }} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
