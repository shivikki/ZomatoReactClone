import React from 'react'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "white",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                padding: "1%"
            }}
            onClick={onClick}
        >
            <img src='/image/next.png' style={{ position: 'absolute' }} />
        </button>
    );
}

export default NextArrow
