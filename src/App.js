import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import Contact from "./pages/Contact";
import AuthContext from "./store/auth-context";

const AllContact = React.lazy(() => import("./pages/AllContact"));
const NewProject = React.lazy(() => import("./pages/NewProject"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const AllProjects = React.lazy(() => import("./pages/AllProjects"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Avi-info" />
          </Route>
          <Route path="/Avi-info" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <AllProjects />
          </Route>
          {/* <Route path="/Avi-info">
            <Redirect to="/about" />
          </Route> */}
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/projects/:projectId">
            <ProjectDetail />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/new-projects">
              <NewProject />
            </Route>
          )}
          <Route path="/contact">
            <Contact />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/all-contact">
              <AllContact />
            </Route>
          )}
          <Route path="/thankyou">
            <ThankYou />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
