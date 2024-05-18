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
    paper: '#031C4D',
  },
  custom_background : {
    topBanner : '#143064',
    estimate : '#142F63',
  },
  text: {
    primary: grey[100],
    secondary: '#ffffff',
    disabled: grey[300],
  },
}

export default paletteDark
