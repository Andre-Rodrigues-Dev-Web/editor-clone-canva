import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
} from './style';


const Dropdown = ({ nameDropDown, linksDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {nameDropDown} <RiArrowDownSLine />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {linksDropDown.map((link, index) => (
            <DropdownItem key={index}>{link.name}</DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
