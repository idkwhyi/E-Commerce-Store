import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Font.css';
import NavLogo from './NavLogo';
import NavList from './NavList';
import { useUser } from '../../context/UserContext';
// import profileImg from '../../assets/image/profile.png';
import CartItem from '../cart/CartItem';



const Navbar = () => {
  // Array to track hover state for each list item
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { user, loginStatus, logout } = useUser() // UserContext
  const navigate = useNavigate()
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [totalAmount, setTotalAmount] = useState(() => {
    // Initialize totalAmount based on cart items
    return cart.reduce((total, item) => total + item.quantity, 0);
  });

  useEffect(() => {
    const newTotalAmount = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  // Listen for changes in localStorage and update the state accordingly
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        setCart(JSON.parse(e.newValue) || []); // Update state with new cart
      }
    };

    // Add an event listener to detect changes to localStorage from other tabs/windows
    window.addEventListener('storage', handleStorageChange);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // navlist hover animation mouse enter
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // navlist hover animation mouse leave
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Function to handle log out 
  const handleLogoutClick = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className='poppins-regular navbar sticky top-0 h-14 bg-softWhite text-deepCharcoal flex items-center justify-between px-20 text-lg border-b border-b-coolGray z-10'>
      <NavLogo />
      <ul className='flex items-center justify-center'>
        <NavList
          listName="Accessories"
          linkTo="/products/accessories"
          index={0}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <NavList
          listName="Clothing"
          linkTo="/products/clothing"
          index={1}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <NavList
          listName="Utensils"
          linkTo="/products/utensils"
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
              <span className="badge badge-sm indicator-item">{totalAmount}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg poppins-medium">{totalAmount} Items</span>
              {cart.map((item) => (
                <CartItem item={item} />
              ))}
              <div className="card-actions">
                <button className="btn btn-neutral btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {/* <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
            <div className="w-10 h-10 rounded-full border border-coolGray">
              <div className='w-full h-full flex items-center justify-center text-center text-xl '>
                {user.username ? user.username.slice(0, 1).toUpperCase() : "#"}
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-deepCharcoal bg-softWhite">
            {/* <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li> */}
            {/* <li><Link>Settings</Link></li> */}

            {
              loginStatus ? (
                <li>
                  <Link
                    onClick={handleLogoutClick}
                    className='bg-softWhite'
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to='/login'
                    className='bg-softWhite'
                  >
                    Login
                  </Link>
                </li>
              )
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

