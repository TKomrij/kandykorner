import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <h2>Locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route exact path="/products">
                    <h2>Products</h2>
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}