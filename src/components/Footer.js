import React from "react"
import { Link } from "gatsby"

import { 
  FaLastfm as Lastfm,
  FaSteamSymbol as Steam,
  FaGithub as Github
} from "react-icons/fa";

export default () => (
  <footer>
    <ul>
      <li>
        <Link to="#"><Lastfm /></Link>
      </li>
      <li>
        <Link to="#"><Steam /></Link>
      </li>
      <li>
        <Link to="#"><Github /></Link>
      </li>
    </ul>
    <p>This site was made using <Link to="https://www.gatsbyjs.org/">Gatsby</Link></p>
  </footer>
)
