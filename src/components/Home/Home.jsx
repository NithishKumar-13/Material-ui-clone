import React , { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PaletteGrid from '../PaletteGrid/PaletteGrid'

const MaterialUIClone = () => {
  const [brightness, setBrightness] = useState(1000);
  const [colorFormat, setColorFormat] = useState(1);

  const handleColorFormatChange = (format) => {
    setColorFormat(format);
  };

  const handleColorBrightness = (value) => {
    setBrightness(value);
  };

  return (
    <>
      <Navbar
        handleColorFormatChange={handleColorFormatChange}
        handleColorBrightness={handleColorBrightness}
        currentColorFormat={colorFormat}
        brightness={brightness}
      />
      <PaletteGrid currentColorFormat={colorFormat} brightness={brightness} />
    </>
  );
};

export default MaterialUIClone;