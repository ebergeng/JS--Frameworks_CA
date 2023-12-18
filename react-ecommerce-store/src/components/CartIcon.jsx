import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingCartIcon } from '../assets/shopping-cart.svg';
import { useStore } from '../store/cartStore';

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  fill: white;
  .icon {
    margin-top: 5px;
    width: 25px;
    height: 25px;
  }
  :hover {
    fill: #27e027;
  }
`;


const ItemCountBadge = styled.span`
  position: absolute;
  top: 10px; // Juster dette etter behov
  right: 15px; // Juster dette etter behov
  background-color: red;
  color: white;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  padding: 8px;
  display: ${(props) => (props.itemCount > 0 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  
  /* Resten av din stil her */
`;

const CartIcon = () => {
    const items = useStore((state) => state.items)
    const count = items.length

  return (
    <CartIconContainer>
      <ShoppingCartIcon className={"icon"} /> {/* Dette er SVG-ikonet for handlekurven */}
      <ItemCountBadge itemCount={count}>
        {count}
      </ItemCountBadge>
    </CartIconContainer>
  );
};

export default CartIcon;