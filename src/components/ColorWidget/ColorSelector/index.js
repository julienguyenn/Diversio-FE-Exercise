import React from 'react';
import './index.css';

const ColorSelector = ({ colorList, selectedColor, changeSelectedColor }) => {

    const colorOptions = colorList.map((colorCode) => {
        return (
            <div
                key={colorCode}
                style={{
                    backgroundColor: colorCode,
                    border: colorCode === selectedColor ? '1px solid black' : `1px solid ${colorCode}`
                }}
                className="color-selector-option"
                onClick={() => changeSelectedColor(colorCode)}
            ></div>
        )
    });

    return (
        <div className="color-selector-wrapper">
            {colorOptions}
            <h5>Yay! The color is {selectedColor}</h5>
        </div>
    );
}

export default ColorSelector;
