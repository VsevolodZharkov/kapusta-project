import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getSuccessToken } from 'redux/auth/auth-selectors';
//------------------------------------------------------------------------//
export default function PrivateRoute({ children }) {
  const accountToken = useSelector(getSuccessToken);
  return accountToken ? children : <Navigate to="/kapusta-project/"></Navigate>;
}
