import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

interface CustomPaletteOptions extends PaletteOptions {
  custom_background?: {
    topBanner: string;
  };
}

const paletteDark: CustomPaletteOptions = {
  mode: 'dark',
  background: {
    default: "#0000ff",
    paper: '#222128',
  },
  custom_background : {
    topBanner : '#143064',
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
    disabled: grey[300],
  },
}

export default paletteDark
