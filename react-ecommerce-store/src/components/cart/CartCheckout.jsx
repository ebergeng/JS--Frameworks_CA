import React from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/cartStore';

const CartCheckout = () => {
    const items = useStore((state) => state.items)
    console.log(items)

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

const CheckoutButton = styled.button`
    height: 100%;
    width: 100%;
    background-color: #242424;
    border: none;
    color: #FF8800;
    font-weight: bold;
    border-radius: 5px;
    :hover {
        cursor: pointer;
        color: #1EFF00;
        background-color: #333333;
    }
`