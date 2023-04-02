import { React } from 'react';
export default function Hello(props) {
    return(
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}
