import Index from "@/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import ErrorPage from "./routes/ErrorPage";
import { Authentication, RootDefault } from "./routes/importRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootDefault />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "/register",
          element: <Authentication />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/login",
          element: <Authentication />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <GlobalStyle>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </GlobalStyle>
  );
}

export default App;
