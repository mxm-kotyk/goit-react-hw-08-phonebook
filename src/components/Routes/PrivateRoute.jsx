import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);

  return !token ? <Navigate to={redirectTo} /> : Component;
};
