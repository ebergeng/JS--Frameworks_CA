import React from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/cartStore';
import { CheckoutButton } from '../buttons/CheckoutButton';

const CartCheckout = () => {
    const items = useStore((state) => state.items)

    const calcPrice = () => {
        let price = 0
        items.map((item) => 
            price += item.discountedPrice
        )
        return price.toFixed(2)
    }

    return (
        <CheckoutBox>
             <TotalPrice>Total: {calcPrice()}</TotalPrice> 
             
            <CheckoutButton>Check Out</CheckoutButton>
        </CheckoutBox>
    )
}

export default CartCheckout

const CheckoutBox = styled.div`
    width: 100%;
    min-height: 55px;
    background-color: #717171;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #313131;
    display: grid;
    grid-template-columns: 3.5fr 1fr;
    align-items: center; 
`

const TotalPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #FF8800;
    margin-left: 8px;
`