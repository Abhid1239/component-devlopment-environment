import { useEffect, useRef, useState } from "react";

function useHOCWidth(Element) {
    return function UseHOCWidth() {
        const [height, setHeight] = useState();

        const compRef = useRef();

        useEffect(() => {
            if (compRef.current) {
                setHeight(compRef.current.offsetHeight);
            }
        }, [compRef])
        return <Element ref={compRef} height={height} />

    }
}

export default useHOCWidth;