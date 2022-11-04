import React from 'react'
import { Checkbox } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const MUICheckbox = () => {
	return <Checkbox {...label} />
}
