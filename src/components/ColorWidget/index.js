import React, { useState }from 'react';
import ColorSelector from './ColorSelector';
import ColorWindow from './ColorWindow';
import './index.css';

const ColorWidget = (props) => {
    let [selectedColor, changeSelectedColor] = useState("grey")

    const { colorList } = props;
    return (
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>Color Picker Widget</h2>
            </div>
            <ColorWindow selectedColor={selectedColor} />
            <ColorSelector
                colorList={colorList}
                changeSelectedColor={changeSelectedColor}
            />
        </div>
    );
}

export default ColorWidget;
