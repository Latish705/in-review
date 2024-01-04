import { useRef, useEffect, useState} from 'react';

const useElementHeight = ()=>{
    const elementRef = useRef(null);
    const [elementHeight, setElementHeight] = useState(0);

    useEffect (()=>{
        const element = elementRef.current;

        if (element) {
            const height = element.clientHeight;
            setElementHeight(height);
        }
    },[elementRef])

    return [elementRef, elementHeight];
}

export default useElementHeight;