import { useLocation } from 'react-router-dom';

export default function PageTransition() {
  const location = useLocation();

  return <div key={location.pathname} className="page-transition active" aria-hidden="true" />;
}
