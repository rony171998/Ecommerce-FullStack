import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react'
import  {Home , P404 } from "./pages";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Login from "./pages/Login";
import  { Footer }  from "./components";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './store/slices/products.slice';
import React from "react"; 


it("renderiza un text", () => {
    render(<Footer />) 
    expect(screen.getByText('valledupar', {exact: false}));
    expect(screen.getByText(/info/i));
    
});

it("renderiza un h1", () => {
    render(<P404 />)
    expect(screen.getByText(/4/i));
})

