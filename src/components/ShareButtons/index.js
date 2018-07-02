import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';

import styles from './shareButtons.css'

const url = "https://belbiy.github.io/giant-cat-army-riddle/"
const title = "Giant cat army riddle!"

const ShareButtons = (props) => {
  return (
    <span className={styles.buttons}>

      <TwitterShareButton className={styles.button} url={url} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <FacebookShareButton className={styles.button} url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

    </span>
  )
}

export default ShareButtons
