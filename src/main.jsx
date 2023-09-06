import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NotFound } from './pages/NotFound.jsx'
import {ApolloClient, ApolloProvider, createHttpLink, gql} from '@apollo/client';
import {cache} from './cache'
import {setContext} from '@apollo/client/link/context'
import {CartProvider} from 'use-shopping-cart'
import('preline')


import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//apollo graphql typedefs
export const typeDefs = gql`
  extend type Query{
    isSignedIn: Boolean!
  }
  `
//react router config syntax
  const router = createBrowserRouter([
      {
        path: "*",
        element: <App />,
        errorElement: <NotFound />
      }
    ])


//apollo graphql syntax
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
})

const authLink = setContext((_, {headers}) =>{
  const token = localStorage.getItem('token')
  return{
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
})

const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink),
  typeDefs,
  connectToDevTools: true
})


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartProvider
     mode="payment"
     cartMode="client-only"
     stripe=""
     successUrl="{`${import.meta.env.BASE_URL}/success`}"
     cancelUrl="{`${import.meta.env.BASE_URL}/success=false`}"
     currency="NGN"
     allowedCountries={['NG']}
     shouldPersist={true}
    >
  <ApolloProvider client={client}>
      <RouterProvider router={router} />
  </ApolloProvider>
  </CartProvider>
  </React.StrictMode>,
)
