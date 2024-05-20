import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Divider } from '@mui/material';

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'white',
          textTransform: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 0, md: 3 },
          mb: { xs: 3, md: 0 },
          textDecoration: 'none',
          fontSize: { xs: '1.2rem', md: 'inherit' },
          
          '&:hover' : {
            textDecoration : 'underline',
            textUnderlineOffset: '10px',
          }
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        Services
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ zIndex: '5000', ml: 3 }}
      >
        <MenuItem onClick={handleClose}
          sx={{
            '&:hover' : {
              textDecoration : 'underline',
              textUnderlineOffset : '5px'
            }
          }}>Blockchain</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}
          sx={{
            '&:hover' : {
              textDecoration : 'underline',
              textUnderlineOffset : '5px'
            }
          }}>Software</MenuItem>
      </Menu>
    </div>
  );
}
