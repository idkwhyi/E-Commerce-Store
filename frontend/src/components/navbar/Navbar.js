import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Font.css';
import NavLogo from './NavLogo';
import NavList from './NavList';
import profileImg from '../../assets/image/profile.png';



const Navbar = () => {
  // Array to track hover state for each list item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className='poppins-regular h-14 bg-softWhite text-deepCharcoal flex items-center justify-between px-20 text-lg'>
      <NavLogo />
      <ul className='flex items-center justify-center'>
        <NavList
          listName="Accessories"
          linkTo="#"
          index={0}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <NavList
          listName="Clothing"
          linkTo="#"
          index={1}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <NavList
          listName="Utensils"
          linkTo="#"
          index={2}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </ul>

      {/* right side */}
      <div className="flex gap-5 items-center" >

        {/* cart */}
        <button className="btn btn-ghost btn-circle">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        {/* profile and dropdown */}
        <div className="dropdown dropdown-end flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* profile image */}
              <img
                alt="Tailwind CSS Navbar component"
                src={profileImg} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link className="justify-between">
                Profile
              </Link>
            </li>
            <li><Link>Settings</Link></li>
            <li><Link>Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// cart, search bar, account