import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const GoogleButton = (props) => {

  return (
    <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              marginTop: 3,
            }}
            onClick = {props.onClick}
            startIcon= {
              <Image width={24} height={24} src='/GoogleLogo.png' alt="google"></Image>
            }
          >
            {props.text}
    </Button>
  )
}

export default GoogleButton