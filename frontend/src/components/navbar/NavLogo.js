// import logoImage from '../../assets/image/Logo.png'
import { Link, useNavigate } from "react-router-dom"

const NavLogo = () => {
  const navigate = useNavigate()

  const handleLogoClicked = () => {
    console.info('logo clicked')
    navigate('/')
  }

  return (
    <Link
      className='max-w-32 h-full p-3 poppins-bold text-2xl flex items-center justify-center' 
      onClick={handleLogoClicked}
    >
      {/* <img src={logoImage} alt="Native"/> */}
      Native
    </Link>
  )
}

export default NavLogo