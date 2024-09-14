import React from "react";
// props.variable name ---> basically parametername.variablename ---> it will initialize the variable already
function Welcome(props) {
    return <h1>Greeting! {props.surname}</h1>
}

const MyComponent = (props) => {


    return (
        <div>
            <h1><Welcome surname="Navarroooo"></Welcome></h1>
            <h1>Hi! I am {props.name}. This is MyComponent</h1>       
            <p>This is a sample {props.project} component.</p>
        </div>
    )  ;
};

export default MyComponent;
