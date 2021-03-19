import React from 'react';
import './index.css';

const ColorSelector = ({colorList}) => {

    const colorOptions = colorList.map((colorCode) => {
        return (
            <div
                key={colorCode}
                style={{backgroundColor: colorCode}}
                className="color-selector-option"
            ></div>
        )
    })

    return (
        <div className="color-selector-wrapper">
            {colorOptions}
        </div>
    );
}

export default ColorSelector;
