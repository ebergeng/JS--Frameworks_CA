import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from "../components/SearchBar";
import styled from 'styled-components';

const HomePage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
                if(!response.ok) {
                    throw new Error('Failed to fetch products')
                }

                const productData = await response.json()
                setAllProducts(productData)
                setFilteredProducts(productData)

            }catch(error) {
                console.error('error fetching products:', error)
            }finally {
                setLoading(false)
            }
        };
        fetchProducts()
    }, [])

    const handleSearch = (searchTerm) => {
        const filtered = allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      };

    if(loading) {
        return (
            <p>Loading....</p>
        )
    }

    return (
        <Wrapper>
            <SearchBar onSearch={handleSearch}/>
            <ProductList products={filteredProducts} />
        </Wrapper>
    )
    }


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default HomePage;

