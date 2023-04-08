import { Typography } from '@mui/material'
import React from 'react'

const CustomHeading = (props) => {
    const font = 'cursive'
    const headingSize = 50
    const spacing = -5

    return (
        <Typography
            variant="h1"
            sx={{
                fontFamily: font,
                fontSize: headingSize,
                letterSpacing: spacing,
            }}
        >
            {props.title}
        </Typography>
    )
}

export default CustomHeading