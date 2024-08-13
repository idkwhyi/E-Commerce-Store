import { Link } from 'react-router-dom';

const NavList = ({ listName, linkTo, index, hoveredIndex, onMouseEnter, onMouseLeave }) => {
  const isHovered = index === hoveredIndex;

  return (
    <li
      className={`w-32 text-base poppins-regular flex items-center justify-center ${hoveredIndex == null && 'text-deepCharcoal'
        } ${isHovered ? 'text-deepCharcoal' : 'text-coolGray'}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <Link to={linkTo} className='w-full text-center'>
        {listName}
      </Link>
    </li>
  );
};

export default NavList;
