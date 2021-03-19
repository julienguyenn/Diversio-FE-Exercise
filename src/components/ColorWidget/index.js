import React from 'react';
import ColorSelector from './ColorSelector';
import ColorWindow from './ColorWindow';
import './index.css';

const ColorWidget = (props) => {

    const { colorList } = props;

    return (
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>Color Picker Widget</h2>
            </div>
            <ColorWindow />
            <ColorSelector />
        </div> 
    );
}

export default ColorWidget;
