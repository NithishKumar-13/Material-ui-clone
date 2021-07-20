import React , { useState } from 'react'
import classes from './ColorBox.module.css'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CoverScreen from '../CoverScreen/CoverScreen'

const ColorBox = (props) => {
  const [, setIsCopied] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [background, setBackground] = useState("");

  const toggleCard = (color) => {
    setBackground(color);
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 800);
  };

  return (
    <>
      <CopyToClipboard text={props.color} onCopy={() => setIsCopied(true)}>
        <div
          className={`${classes.item}`}
          style={{ background: props.color }}
          onClick={() => toggleCard(props.color)}
        >
          <p className={classes.copy}>copy</p>
          <p className={classes.colorName}>{props.name}</p>
          <Link to={`/generateScale/${props.name}`} className={classes.more}>
            more
          </Link>
        </div>
      </CopyToClipboard>
      {showCard && <CoverScreen background={background} />}
    </>
  );
};

export default ColorBox;