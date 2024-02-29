import React from "react";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

const LayoutLanding = (props) => {
    return(
        <>
            <Navigation/>
            <div className="container mx-auto py-10">
                {props.children}
            </div>
            
            <Footer />
        </>
    )
}

export default LayoutLanding