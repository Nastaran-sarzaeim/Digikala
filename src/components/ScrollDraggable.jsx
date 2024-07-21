import { useState, useRef } from "react";

function ScrollDraggable({ children, ref, className ,next , prev}) {

    const scrollRef = ref || useRef(null)
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleScrollRight = () => {
        console.log(scrollRef);
        scrollRef.current.scrollLeft += 150;
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleScrollLeft = () => {
        scrollRef.current.scrollLeft -= 150;
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const StyleForIcon = {
        fontSize: '20px',
        color: '#868686'
    };
    return (
        <div
            ref={scrollRef}
            className={className}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {children}
            <a className={prev} onClick={handleScrollRight}>
                <i className="cube-nav-chevron-right" style={StyleForIcon}></i>
            </a>
            <a className={next} onClick={handleScrollLeft}>
               <i className="cube-nav-chevron-left" style={StyleForIcon}></i>
            </a>
        </div>
    );
}
export default ScrollDraggable 