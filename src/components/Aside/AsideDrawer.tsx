import React from 'react'
import {
	Container,
	CssBaseline,
	Box,
	Typography,
	AppBar,
	Drawer,
	Toolbar,
	Divider,
	ListItem,
	List,
	ListItemIcon,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import routeJson from '../../data/routes.json'

import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const AsideDrawer = () => {
	const drawerWidth = '25%'

	const returnFirstLetter = (palabra: string) => {
		if (palabra.indexOf(' ') === -1) {
			const phraseSeparate = palabra.split('')
			return `${phraseSeparate[0]}${phraseSeparate[1]}`.toUpperCase()
		}
		const phrase = palabra.replace(/\w\S*/g, (phraseConvert: string) =>
			phraseConvert.charAt(0).toUpperCase()
		)
		return phrase.split(' ').join('')
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						top: '67px',
						boxShadow: '0 8px 6px -2px black',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Divider />
				<FaUserCircle
					style={{
						fontSize: '150px',
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						marginTop: '15px',
					}}
				/>
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						marginTop: '5px',
						marginBottom: '10px',
					}}
					variant="h5"
				>
					Nombre de usuario
				</Typography>

				<Divider />
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						marginTop: '5px',
						padding: '12px',
					}}
					variant="h4"
				>
					Menú
				</Typography>
				<Divider />
				<List sx={{ padding: '5px', marginLeft: '35px' }}>
					{routeJson.routes.map((route, index) => (
						<ListItem key={index} disablePadding>
							<Typography sx={{ color: 'dodgerblue', fontWeight: 'bold' }}>
								{returnFirstLetter(route.routeName)}
							</Typography>
							<ListItemButton>
								<Link
									style={{ textDecoration: 'none', color: 'black' }}
									to={`/${route.path}`}
								>
									<ListItemText primary={route.routeName} />
								</Link>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			{/* <Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<Toolbar />
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
					dolor purus non enim praesent elementum facilisis leo vel. Risus at
					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
					quisque non tellus. Convallis convallis tellus id interdum velit
					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
					faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
					mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
					risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
					purus viverra accumsan in. In hendrerit gravida rutrum quisque non
					tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
					morbi tristique senectus et. Adipiscing elit duis tristique
					sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
			</Box> */}
		</Box>
	)
}
