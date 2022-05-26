import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import {
  GET_COMPANY_INFO,
  GET_CONTACT_INFO,
  GET_TEAM_INFO,
} from './graphql/getInfo';
import './index.css';

const Marketing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<About query={GET_COMPANY_INFO} title="About Us" />}
      />
      <Route
        path="/contact"
        element={<About query={GET_CONTACT_INFO} title="Contact" />}
      />
      <Route
        path="/team"
        element={<About query={GET_TEAM_INFO} title="Team" />}
      />
    </Routes>
  );
};
export default Marketing;
