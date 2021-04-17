import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';

import './Header.scss'
const Header = () => {
  return (
    <header className="App-header">
      <section className="App-Name">
        <FontAwesomeIcon className="App-icon" icon={faReact} spin />
        React App
      </section>
      <section className="Right-icons">
      <IconButton className="Icon-buttons" aria-label="user">
        <FontAwesomeIcon icon={faUser} />
      </IconButton>
      </section>
    </header>
  )
}

export default Header
