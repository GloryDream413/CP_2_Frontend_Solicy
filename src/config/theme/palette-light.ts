import { PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

interface CustomPaletteOptions extends PaletteOptions {
  custom_background?: {
    topBanner: string;
    estimate: string;
  };
}

const palette: CustomPaletteOptions = {
  mode: 'light',
  background: {
    default: '#f2f5f5', //'#fdfdfd',
    paper: common.white,
  },
  custom_background : {
    topBanner : '#1551C2',
    estimate : '#134EBC',
  },
  text: {
    primary: grey[900],
    secondary: '#000000', // grey[700],
    disabled: grey[500],
  },
}

export default palette
