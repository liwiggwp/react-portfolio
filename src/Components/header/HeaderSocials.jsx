import React from 'react'
import {BsInstagram, BsTelegram, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://github.com" target="_blank"><BsTelegram/></a>
        <a href="https://web.telegram.org" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials