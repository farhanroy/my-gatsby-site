import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Roy.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        An Android Developer based in Pasuruan, Indonesia.
        <br /> I'm really excited to learn about Android, Flutter, Jetpack Compose, and React Native
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/FarhanR26420297">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/farhanroy__">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/farhanroy">
          <Github />
        </a>
        
        <a className="mr-5 icon" href="mailto://farhanroy120@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
