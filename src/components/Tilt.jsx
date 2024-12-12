import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = (props) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 45,
                scale: 1,
                speed: 450,
                ...props.options,
            });
        }
        return () => tiltRef.current?.vanillaTilt?.destroy();
    }, [props.options]);

    return <div ref={tiltRef} {...props}>{props.children}</div>;
};

export default Tilt;