import { useEffect } from "react";
import { useLocation } from "react-router";

const RoutingScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default RoutingScrollToTop;