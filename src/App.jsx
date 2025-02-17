import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ErrorBoundary} from "react-error-boundary"
import { HomePage } from './Components/HomePage';
import { ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoundaryErrorPage } from './Errors/ErrorBoundaryPage';
import { PageElmErrorPage } from './Errors/ErrorElementPage';
import { Admin } from './Components/Admin/Admin';
import { SignUp } from './Components/Auth/signUp';
import { LogIn } from './Components/Auth/Login';
import { Modify } from './Components/Admin/Modify';
import { ModifyComputer } from './Components/Admin/ModifyComp';

function App() {
  const GetUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_Prod_Backend_URL : import.meta.env.VITE_Local_Backend_URL;
  const router = createBrowserRouter([
    {
      path: "/",
      loader: async () => {
        try {
          const urls = [
            `${GetUrl}/api/products/getphones`,
            `${GetUrl}/api/products/getcomputer`
          ];
          const sendRequest = await Promise.all(urls.map((url) => fetch(url, {
            method: "GET",
            credentials: "include"
          })));
          const response = await Promise.all(sendRequest.map((res) => res.json()));

          const ReceivedData = response.map((getResponse) => {
            const { msg, FindAllItems } = getResponse;
            return msg || FindAllItems
          })
          return {
            smartphones: ReceivedData[0],
            computers: ReceivedData[1]
          }

        } catch (error) {
          console.log("Error while fetching with Loader", error);
          return null;
        }
      },
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <HomePage/>
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
    {
      path: "/signup",
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <SignUp/>
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
    {
      path: "/login",
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <LogIn/>
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
    {
      path: "/admin/product/modify/:id",
      loader: async ({params}) => {
        const { id } = params;
        try {
          const url = `${GetUrl}/api/products/getphonebyid/${id}`
          const getIdRequest = await fetch(url)
          const response = await getIdRequest.json()
          return response.PhoneId
        } catch (error) {
          console.log("Modify Selection", error);
          return null;
        }
      },
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <Modify />
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
    {
      path: "/admin/product/modify/computer/:id",
      loader: async ({params}) => {
        const { id } = params;
        try {
          const url = `${GetUrl}/api/products/getcomputerbyid/${id}`
          const getIdRequest = await fetch(url)
          const response = await getIdRequest.json()
          return response.ComputerId
        } catch (error) {
          console.log("Modify Selection", error);
          return null;
        }
      },
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <ModifyComputer />
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
    {
      path: "/admin",
      loader: async() => {
        try {
          const urls = [
            `${GetUrl}/api/products/getphones`,
            `${GetUrl}/api/products/getcomputer`
            ];
          const sendRequest = await Promise.all(urls.map((url) => fetch(url, {
            method: "GET",
            credentials: "include"
          })));
          const response = await Promise.all(sendRequest.map((res) => res.json()));

          const ReceivedData = response.map((getResponse) => {
            const { msg, FindAllItems } = getResponse;
            return msg || FindAllItems
          })
          return {
            smartphones: ReceivedData[0],
            computers: ReceivedData[1]
          }
          
        } catch (error) {
          console.log("Error while fetching with Loader", error);
          return null;
        }
      },
      element: (
        <ErrorBoundary fallback={<BoundaryErrorPage/>}>
          <Admin/>
        </ErrorBoundary>
      ),
      errorElement: <PageElmErrorPage/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
      theme='light'
      position="top-center"
      autoClose={3000}
      transition={Zoom}
      />
    </>
  )
}

export default App
