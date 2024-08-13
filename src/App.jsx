import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Admin from "./ADMIN/Admin";
import AdminRegistration from "./ADMIN/AdminRegistration";
import TLLoginPage from "./TL/TLLoginPage";
import NewJobDescription from "./TL/NewJobDescription";
import ViewJobDescription from "./TL/ViewJobDescription";
import EditJobDescription from "./TL/EditJobDescription";
import PMLogin from "./PM/PMLogin";
import PageNotFound from "./COMPONENTS/PageNotFound";
import { AuthProvider, useAuth } from "./COMPONENTS/AuthContext";
import PrivateRoute from "./COMPONENTS/PrivateRoute";
import PMviewjobDesc from "./PM/PMviewjobDesc";
import PMworkBench from "./PM/PMworkBench";
import PMreqHistory from "./PM/PMreqHistory";
import HRLogin from "./HR/HRLogin";
import ViewRequests from "./HR/ViewRequests";
import ViewAppliedCandidates from "./HR/ViewAppliedCandidates";
import ViewSelectedCandidates from "./HR/ViewSelectedCandidates";
import ApplyNewCandidate from "./HR/ApplyNewCandidate";
import InterviewerList from "./HR/InterviewerList";
import INTERVIEWERLogin from "./INTERVIEWER/INTERVIEWERLogin";
import InterviewList from "./INTERVIEWER/InterviewList";
import InterviewHistory from "./INTERVIEWER/InterviewHistory";
import PMAssignedCandidates from "./PM/PMAssignedCandidates";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "admin/adminRegistration",
    element: <AdminRegistration />,
  },
  {
    //TEAM-LEADER PAGES
    path: "TLLogin",
    element: <TLLoginPage />,
  },
  {
    path: "TLLogin/newJobDescription",
    element: <PrivateRoute element={<NewJobDescription />} />,
  },
  {
    path: "TLLogin/viewJobDescription",
    element: <PrivateRoute element={<ViewJobDescription />} />,
  },
  {
    path: "TLLogin/editJobDescription",
    element: (
      <PrivateRoute element={<EditJobDescription></EditJobDescription>} />
    ),
  },
  {
    //PROJECT-MANAGER PAGES
    path: "PMLogin",
    element: <PMLogin />,
  },
  {
    path: "PMLogin/PMviewjobDesc",
    element: <PrivateRoute element={<PMviewjobDesc></PMviewjobDesc>} />,
  },
  {
    path: "PMLogin/PMworkbench",
    element: <PrivateRoute element={<PMworkBench></PMworkBench>} />,
  },
  {
    path: "PMLogin/PMreqHistory",
    element: <PrivateRoute element={<PMreqHistory></PMreqHistory>} />,
  },
  {
    path: "PMLogin/PMAssignedCandidates",
    element: (
      <PrivateRoute element={<PMAssignedCandidates></PMAssignedCandidates>} />
    ),
  },
  {
    //HUMAN-RESOURCE MANAGER
    path: "HRLogin",
    element: <HRLogin></HRLogin>,
  },
  {
    path: "HRlogin/viewRequests",
    element: <PrivateRoute element={<ViewRequests></ViewRequests>} />,
  },
  {
    path: "/HRLogin/appliedCandidates",
    element: (
      <PrivateRoute element={<ViewAppliedCandidates></ViewAppliedCandidates>} />
    ),
  },
  {
    path: "/HRLogin/selectedCandidates",
    element: (
      <PrivateRoute
        element={<ViewSelectedCandidates></ViewSelectedCandidates>}
      />
    ),
  },
  {
    path: "/HRLogin/applyNewCandidate",
    element: <PrivateRoute element={<ApplyNewCandidate></ApplyNewCandidate>} />,
  },
  {
    path: "/HRLogin/intreviewerList",
    element: <PrivateRoute element={<InterviewerList></InterviewerList>} />,
  },
  {
    path: "/IRLogin",
    element: <INTERVIEWERLogin></INTERVIEWERLogin>,
  },
  {
    path: "/IRLogin/interviewList",
    element: <InterviewList></InterviewList>,
  },
  {
    path: "/IRLogin/interviewHistory",
    element: <InterviewHistory></InterviewHistory>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

/*
import Home from "./Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Admin from "./ADMIN/Admin";
import PageNotFound from "./PageNotFound";
import AdminRegistration from "./ADMIN/AdminRegistration";
import TLLoginPage from "./TL/TLLoginPage";
import NewJobDescription from "./TL/NewJobDescription";
import ViewJobDescription from "./TL/ViewJobDescription";
import EditJobDescription from "./TL/EditJobDescription";
import PMLogin from "./PM/PMLogin";
import PrivateRoute from "./COMPONENTS/PrivateRoute";
import { AuthProvider } from "./COMPONENTS/LoginAuthContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/admin",
      element: <Admin></Admin>,
    },
    {
      path: "/admin/adminRegistration",
      element: <AdminRegistration></AdminRegistration>,
    },
    {
      path: "/TLLogin",
      element: <TLLoginPage></TLLoginPage>,
    },
    {
      path: "/TLLogin/newJobDescription",
      element: <NewJobDescription />,
    },
    {
      path: "/TLLogin/viewJobDescription",
      element: <ViewJobDescription></ViewJobDescription>,
    },
    {
      path: "/TLLogin/editJobDescription",
      element: <EditJobDescription></EditJobDescription>,
    },
    {
      path: "/PMLogin",
      element: <PMLogin></PMLogin>,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

*/

/*
  <Route
              path="admin/adminRegistration"
              element={<AdminRegistration></AdminRegistration>}
            ></Route>

            function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
     
          <Route path="registration" element={<AdminRegistration />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

 */

/*  {
    //TEAM-LEADER PAGES

    path: "TLLogin",
    element: <TLLoginPage />,
  },
  {
    path: "TLLogin/newJobDescription",
    element: <PrivateRoute element={<NewJobDescription />} />,
  },
  {
    path: "TLLogin/viewJobDescription",
    element: <PrivateRoute element={<ViewJobDescription />} />,
  },
  {
    path: "TLLogin/editJobDescription",
    element: <PrivateRoute element={<EditJobDescription />} />,
  },*/
