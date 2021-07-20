import React from 'react'
import classes from './PaletteGrid.module.css'
import ColorPalette from '../../ColorPalette'
import ColorBox from '../ColorBox/ColorBox'
import chroma from 'chroma-js'

const PaletteGrid = (props) => {
    const { currentColorFormat , brightness } = props

    function changeColorFormat(format) {
        if(+currentColorFormat === 1) return chroma(format).alpha(brightness/1000).hex()
        if(+currentColorFormat === 2) return chroma(format).alpha(brightness/1000).css()
        if(+currentColorFormat === 3) return chroma(format).alpha(brightness/1000).css('hsl')
    }

    return (
        <div className={classes.container}>
            {ColorPalette.map(pal => {
                return <ColorBox color={changeColorFormat(pal.colorCode)} name={pal.colorName}  />
            })}
        </div>
    )
}

export default PaletteGrid