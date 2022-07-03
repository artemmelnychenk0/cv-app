/* eslint-disable no-useless-constructor */
import React from "react";

const Preview = (props) => {
    const { array } = props;
    return (
        <ul>
            {array.map(item => <li key={item.toString()}>{item}</li>)}
        </ul>
    )
}
export default Preview