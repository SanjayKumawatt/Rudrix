import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import StudyPortalPage from './Pages/StudyPortal'
import SocialNetworkPage from './Pages/SocialPage'
import ProductsPage from './Pages/ProductPage'
import AboutPage from './Pages/About'
import CareersPage from './Pages/CareerPage'
import ContactPage from './Pages/ContactPage'
import PrivacyPolicy from './Pages/PrivacyPage'
import TermsConditions from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[

        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/study",
          element:<StudyPortalPage/>
        },
        {
          path:"/social",
          element:<SocialNetworkPage/>
        },
        {
          path:"/products",
          element:<ProductsPage/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/career",
          element:<CareersPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-and-conditions",
          element:<TermsConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App