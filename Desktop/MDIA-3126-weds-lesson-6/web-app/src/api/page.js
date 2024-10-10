"use client"
import { useState } from "react";

export default function Home() {
// 1 create a product page
// 2 create a header
// 3 create a button the requests data
// 4 request data
// 5 store the data in my state (react state)
// 6 output the data
    const [products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT);
        // waitng for the response
        // taking the response and assigning to another variable
        console.log(":)" + response);
        const data = await response.json();
        console.log(":(" + data);

        setProducts(data);
    }


    const ProductList = () => {
        if (products) {
            let ProductList = [];

            products.forEach((product, index) => {
                ProductList.push(
                    <li key={index}>{product.name}</li>
                )
            });
        }

        return (
        <div className="border-4 border-black p-4 mb-4">
            <ul>{ProductList}</ul>
        </div>
        )
    }

    return (
        <div className="border-4 border-black p-4 mb-4"> No products right now!</div>
        )
    }

    return(
        <div className="bg-yellow-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="border-4 border-black p-4 mb-4">
            <h1 className="text-4xl mb-6 text-yellow-700">Welcome to my product page!</h1>
            <button 
                className="border-black border-2 p-2 bg-black text-yellow-300"
                onClick={fetchProducts}
            >
                Fetch products!
            </button>
            </header>
            <ProductList />
        </div>
    );
