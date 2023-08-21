import { forwardRef } from "react";
import useHOCWidth from "./UseHOCWidth";
// import React, { useRef, forwardRef } from 'react';

const CompHeight = (props, ref) => {
    console.log(ref)
    return (
        <div ref={ref}>
            CompHeight will : {props.height}
        </div>
    )
}


// eslint-disable-next-line react-hooks/rules-of-hooks
export default useHOCWidth(forwardRef(CompHeight));