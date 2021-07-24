import React , { useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import classes from './GenerateScale.module.css'
import Navbar from '../Navbar/Navbar'
import colorPalette from '../../ColorPalette'
import chroma from 'chroma-js'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CoverScreen from '../CoverScreen/CoverScreen'


const GenerateScale = () => {
    const { colorName } = useParams()
    const [brightness , setBrightness] = useState(1000)
    const [colorFormat , setColorFormat] = useState(1)
    const [, setIsCopied] = useState(false)
    const [showCard , setShowCard] = useState(false)
    const [background , setBackground] = useState('')


    const toggleCard = (color) => {
        setBackground(color)
        setShowCard(true)
        setTimeout(() => {
            setShowCard(false)
        },800)
    }

    const handleColorFormatChange = (format) => {
        setColorFormat(format)
    }

    const handleColorBrightness = (value) => {
        setBrightness(value)
    }

    const colorFound = colorPalette.find(color => color.colorName === colorName)
    const { colorCode } = colorFound
    const colorArray =  (chroma.scale(['#fff',colorCode , '#000']).mode('lch').colors(15))
    
    return(
        <>
        <Navbar handleColorFormatChange={handleColorFormatChange} handleColorBrightness={handleColorBrightness} currentColorFormat={colorFormat} brightness={brightness} />
        <div className={classes.container}>
            {colorArray.map((shade,idx) => 
            (<CopyToClipboard text={shade} onCopy={() => setIsCopied(true)}>
            <div className={classes.container__item} style={{background:shade}} onClick={() => toggleCard(shade)}>
              {idx === colorArray.length -1 ? <Link to='/' className={classes.goBack}>Go back</Link> : <p className={classes.copyText}>Copy</p>} 
            </div>
            </CopyToClipboard>))}
        </div>
        {showCard && <CoverScreen background={background} />}
        </>
    )
}

export default GenerateScale