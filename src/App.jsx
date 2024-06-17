import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const LandingPage = lazy(() => import("./components/Landing"));
const ToDo = lazy(() => import("./components/ToDo"));

function App() {
  //used suspense API so that only required bundle will come from the backend server
  // Increase optimization

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                {" "}
                <LandingPage />{" "}
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                {" "}
                <Dashboard />{" "}
              </Suspense>
            }
          />
          <Route
            path="/todo"
            element={
              <Suspense fallback={"loading..."}>
                {" "}
                <ToDo />{" "}
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
