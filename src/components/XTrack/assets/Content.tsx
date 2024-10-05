import React, { useEffect, useRef } from 'react';

import { IXTrackText } from "../../Interfaces";

export default function Content({ text }: IXTrackText): React.ReactElement {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = textRef.current;
        let position = 0;
        let animationFrameId: number;

        const marquee = () => {
            if (element) {
                position -= 0.5;
                if (Math.abs(position) >= element.scrollWidth) {
                    position = 0;
                }
                element.style.transform = `translateX(${position}px)`;
            }
            animationFrameId = requestAnimationFrame(marquee);
        };

        marquee();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="xtrack__text__container" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <span ref={textRef} className="xtrack__text" style={{ display: 'inline-block' }}>
                {text} {text}
            </span>
        </div>
    );
}
