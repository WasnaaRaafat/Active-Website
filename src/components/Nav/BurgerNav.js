import styled from 'styled-components';
import { useState } from 'react';
import TopNavbar from './TopNavbar';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  position: absolute;
  top: 18px;
  right: 15px;
  z-index: 20;
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#e84545' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const BurgerNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <TopNavbar open={open} />
    </div>
  );
};

export default BurgerNav;
