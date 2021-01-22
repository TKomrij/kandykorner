import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?expand=productType")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}