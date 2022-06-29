import { AppBar, Typography } from '@mui/material'

const Header = () => (
  <AppBar position='static' sx={{ paddingX: 2, paddingY: 1 }}>
    <Typography fontWeight='bold' variant='h4'>REACT CHALLENGE</Typography>
  </AppBar>
)

export default Header
