import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Font.css';
import NavLogo from './NavLogo';
import NavList from './NavList';
// import profileImg from '../../assets/image/profile.png';



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
    <nav className='poppins-regular navbar h-14 bg-softWhite text-deepCharcoal flex items-center justify-between px-20 text-lg'>
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

      {/* profile and cart container */}
      {/* profile and cart is a component from daisy ui */}
      <div className="flex-none flex items-center gap-3">

        {/* cart */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg poppins-medium">8 Items</span>
              <span className="text-fernGreen">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-neutral btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {/* <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li> */}
            {/* <li><Link>Settings</Link></li> */}
            {/* <li><Link>Logout</Link></li> */}
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

