import { AppBar, Toolbar, Typography } from '@mui/material'

export function Header () {
  return (
    <AppBar color='primary'>
      <Toolbar>
        <Typography variant='h6' component='div'>
          Mural de fotos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
