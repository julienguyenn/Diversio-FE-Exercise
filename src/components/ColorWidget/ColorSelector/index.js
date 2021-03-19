import React from 'react';
import './index.css';

const ColorSelector = ({ colorList, changeSelectedColor }) => {

    const colorOptions = colorList.map((colorCode) => {
        return (
            <div
                key={colorCode}
                style={{backgroundColor: colorCode}}
                className="color-selector-option"
                onClick={() => changeSelectedColor(colorCode)}
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
