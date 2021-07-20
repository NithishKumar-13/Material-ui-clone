import chroma from 'chroma-js'

const generateScale = (hexColor , noOfColors) => {
    return chroma.scale(['#fff',hexColor,'#000']).mode('lch').colors(noOfColors)
}

export { generateScale }