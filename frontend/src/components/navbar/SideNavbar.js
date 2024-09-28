import { useState } from 'react';
import NavList from './NavList';

const SideNavbar = ({ onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle clicks on the background
  const handleBackgroundClick = (e) => {
    // Check if the click target is the background (not the white area)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // navlist hover animation mouse enter
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // navlist hover animation mouse leave
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="lg:hidden inset-0 flex flex-row-reverse bg-black bg-opacity-50" onClick={handleBackgroundClick}>
      <div className="bg-softWhite w-screen min-h-screen p-10 z-30 " onClick={(e) => e.stopPropagation()}>
        <ul className=' flex flex-col items-start justify-start gap-5 pt-5'>
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
      </div>
      <div></div>
    </nav>
  );
};

export default SideNavbar;
