import { Typography } from '@mui/material'
import React from 'react'

const CustomHeading = (props) => {
    const font = 'cursive'
    const headingSize = 40
    const spacing = 0

    return (
        <Typography
            variant="h1"
            sx={{
                fontFamily: font,
                fontSize: headingSize,
                letterSpacing: spacing,
                marginBottom: 2
            }}
        >
            {props.title}
        </Typography>
    )
}

export default CustomHeading