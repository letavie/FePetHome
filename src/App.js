import DefaultLayout from "Components/layout/DefaultLayout";
import { Fragment } from "react";
import { publicRoute } from "./routes/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StaffPage from "Components/Molescule/Staff/StaffPage";
import AdminPage from "Components/Molescule/Admin/AdminPage";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            {publicRoute.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout == StaffPage) {
                Layout = StaffPage;
              }
              if (route.layout == AdminPage) {
                Layout = AdminPage;
              } else if (route.layout == null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        stacked
      />
    </div>
  );
}

export default App;
