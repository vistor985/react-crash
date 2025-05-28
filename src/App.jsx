import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  // return (
  //   <>
  //     <Navbar />
  //     {/* <!-- Hero --> */}
  //     <Hero />
  //     {/* <!-- Developers and Employers --> */}
  //     <HomeCards></HomeCards>
  //     {/* <!-- Browse Jobs --> */}
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>
  // );

  return <RouterProvider router={router} />;
};

export default App;
