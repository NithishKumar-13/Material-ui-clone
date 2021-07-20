import React from 'react'
import classes from  './Navbar.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSnackbar } from 'react-simple-snackbar'
import { NavLink } from 'react-router-dom'

const options = {
  position: "bottom-left",
};

const Navbar = ({
  handleColorFormatChange,
  currentColorFormat,
  brightness,
  handleColorBrightness,
}) => {
  const [openSnackbar, ] = useSnackbar(options);

  return (
    <>
      <nav className={classes.navbar}>
        <NavLink to="/" className={classes.logo}>
          materialuicolors
        </NavLink>
        <div className={classes.wrapper}>
          <div className={classes.slider}>
            <div className={classes.level}>Level : [{brightness}]</div>
            <Slider
              min={100}
              max={1000}
              step={100}
              defaultValue={1000}
              onChange={(val) => handleColorBrightness(val)}
            />
          </div>
          <div className={classes.format}>
            <div>
              <Select
                className={classes.select}
                value={currentColorFormat}
                onChange={(evt) => handleColorFormatChange(evt.target.value)}
                onClick={() => openSnackbar("Color Format Changed!")}
              >
                <MenuItem className={classes.item} value={1}>
                  HEX - #1234EF
                </MenuItem>
                <MenuItem className={classes.item} value={2}>
                  RGB - (255,255,255)
                </MenuItem>
                <MenuItem className={classes.item} value={3}>
                  HSL - (0,100%,50%)
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
