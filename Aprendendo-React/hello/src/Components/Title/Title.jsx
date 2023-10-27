import React from "react";

import './Title.css'

const Title = (props) => {

    return(
        <h1 className="title">Hello {props.text}</h1>
    );
}

export default Title;

// export default function Title() {

//     return(
//         <h1 className="title">Hello Component Title</h1>
//     );
// }