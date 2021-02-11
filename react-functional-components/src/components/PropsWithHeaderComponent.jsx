import React from 'react';

export const PropsWithHeaderComponent = (props) => {
    console.log(props);
    return (

        <div>
            <h1>hello function with props {props.name} - {props.last}</h1>
            <p>{props.children}</p>
        </div>

    );

}
