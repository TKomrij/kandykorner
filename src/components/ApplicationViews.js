import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

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

            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees">
                        <h2>Employees</h2>
                        <EmployeeList />
                    </Route>

                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}