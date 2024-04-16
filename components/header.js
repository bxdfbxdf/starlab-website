import NavToggle from './navtoggle'
import NavMenu from "./navmenu"
import TamuLogo from "./tamulogo"
 

const Header = () => {
  return (
    <header className='header'>
      <TamuLogo className='align-left'/>
      <NavToggle>
        <NavMenu/>
      </NavToggle>
    </header>
  )
}


export default Header
