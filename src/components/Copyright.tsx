import React from 'react'
import Typography from '@mui/material/Typography';

function Copyright(props: any) {
  return (
    <>
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {/* <a color="inherit" href="https://www.bg.com.bo/" target="_blank"> */}
            <a color="inherit" href="https://www.bg.com.bo/" >
                Banco Ganadero - Mype
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </>

    
  )
}

export default Copyright