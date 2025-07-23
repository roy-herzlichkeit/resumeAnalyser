import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to='/'>
            <p className="text-lg sm:text-2xl font-bold text-gradient"> 
                RESUMAID
            </p>
        </Link>
        <Link to='/upload' className="primary-button w-fit text-lg sm:text-2xl text-center">
                Upload Resume
        </Link>
    </nav>
  )
}

export default Navbar
