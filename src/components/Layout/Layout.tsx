import React, { ReactNode } from 'react'
import Grid from '@mui/material/Grid'
import { AsideDrawer } from '../Aside'
import { UpperMenu } from '../UpperMenu'

interface Props {
	children?: ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<UpperMenu />
			<Grid container>
				<Grid item xs={4}>
					<AsideDrawer />
				</Grid>
				<Grid item xs={8}>
					{children}
				</Grid>
			</Grid>
		</>
	)
}
