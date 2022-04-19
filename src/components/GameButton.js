import React from 'react';

const GameButton = ({label, onClick}) => {
    return <button
        className="button-white"
        value={ label }
        id={ label }
        onClick={onClick}
        >
        { label }
    </button>
}

export default GameButton