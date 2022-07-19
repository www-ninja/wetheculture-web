import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log("run it")
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTop;