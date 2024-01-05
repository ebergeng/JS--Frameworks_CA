import React from "react"
import styled from 'styled-components';
import { useStore } from "../../store/cartStore";

const ProductDetail = (item) => {
    const setNewItem = useStore((state) => state.setItems)
    const product = item.product

    const addItem = (item) => {
        setNewItem(item)

      }

    return (
        <ProductContainer>
            <ImgContainer>
                <img src={product.imageUrl} alt={product.title} />
            </ImgContainer>
            <TextContainer>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </TextContainer>
            <PriceContainer>
                <div className="priceArea">
                    {product.price > product.discountedPrice && (
                        <span className="originalPrice">{product.price},-</span>
                    )}
                    <span>{product.discountedPrice},-</span>
                </div>
                <div><Button onClick={() => addItem(product)}>Add to cart</Button></div>
            </PriceContainer>
        </ProductContainer>
    )
}

const Button = styled.button`
    width: 100%;
    background-color: #242424;
    border: none;
    color: #FF8800;
    height: 50px;
    :hover {
        cursor: pointer;
        color: #1EFF00;
        background-color: #333333;
    }
`

const PriceContainer = styled.div`
    height: 100%;
    background-color: #464646;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #FF8800;
    font-size: 22px;

    .priceArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .originalPrice {
        color: white;
        text-decoration: line-through;
        font-size: 16px;
    }

`

const ImgContainer = styled.div`
    margin: auto;
    img {
        width: 100%;
    }
`

const TextContainer = styled.div`
    height: 100%;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        color: white;
    }
    p {
        color: #e4e4e4;
    }
`

const ProductContainer = styled.div`
    background-color: #717171;
    width: 100%;
    max-width: 800px;
    min-height: 300px;
    height: fit-content;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    box-shadow: 2px 2px 5px #313131;
    border-radius: 5px;
    overflow: hidden;
    margin: auto;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
  }
`

export default ProductDetail