import React from 'react'
import classes from './CoverScreen.module.css'

const CoverScreen = ({background}) => {
    const messages = ['got it!' , 'copied!' , 'panda syle!' , 'it\'ll rock' , 'paste me!']

    const displayMessage = () => {
        const randNum = Math.floor(Math.random() * messages.length)
        return messages[randNum]
    }

    return (
        <div className={classes.coverScreen} style={{background}}>
            <h1 className={classes.message}>{displayMessage()}</h1>
        </div>
    )
}

export default CoverScreen