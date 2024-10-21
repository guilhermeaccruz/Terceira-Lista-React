import React from 'react';

function ParagrafoDinamico(props) {
    const estilo = {
        color: props.isHighlighted ? 'red' : 'black',
        fontSize: '16px',
        margin: '10px 0'
    };

    return (
        <p style={estilo}>
            {props.children}
        </p>
    );
}

export default ParagrafoDinamico;
