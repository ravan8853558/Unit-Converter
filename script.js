// Function to update the units based on the selected category
function updateUnits(unitType) {
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');

    // Clear previous options
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    if (unitType === "length") {
        const lengthUnits = ['Meters', 'Kilometers', 'Miles', 'Inches', 'Centimeters', 'Yards'];
        lengthUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase();
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "temperature") {
        const tempUnits = ['Celsius', 'Fahrenheit', 'Kelvin'];
        tempUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase();
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "weight") {
        const weightUnits = ['Grams', 'Kilograms', 'Pounds', 'Ounces', 'Tons'];
        weightUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase();
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "area") {
        const areaUnits = ['Square Meters', 'Square Kilometers', 'Square Miles', 'Acres', 'Hectares'];
        areaUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase().replace(/\s/g, '');
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "volume") {
        const volumeUnits = ['Cubic Meters', 'Liters', 'Gallons', 'Cubic Inches', 'Cubic Feet'];
        volumeUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase().replace(/\s/g, '');
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "speed") {
        const speedUnits = ['Meters/Second', 'Kilometers/Hour', 'Miles/Hour'];
        speedUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase().replace(/\//g, '');
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    } else if (unitType === "time") {
        const timeUnits = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks'];
        timeUnits.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.toLowerCase();
            option.textContent = unit;
            fromUnitSelect.appendChild(option);
            const toOption = option.cloneNode(true);
            toUnitSelect.appendChild(toOption);
        });
    }
}

// Event listener for the unit type select
document.getElementById('unitType').addEventListener('change', function () {
    const unitType = this.value;
    updateUnits(unitType);
});

// Conversion functions for Length, Temperature, Weight, Area, Volume, Speed, Time
document.getElementById('convertBtn').addEventListener('click', function () {
    const value = parseFloat(document.getElementById('valueInput').value);
    const unitType = document.getElementById('unitType').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert("Please enter a valid number!");
        return;
    }

    let result = 0;

    if (unitType === "length") {
        result = convertLength(value, fromUnit, toUnit);
    } else if (unitType === "temperature") {
        result = convertTemperature(value, fromUnit, toUnit);
    } else if (unitType === "weight") {
        result = convertWeight(value, fromUnit, toUnit);
    } else if (unitType === "area") {
        result = convertArea(value, fromUnit, toUnit);
    } else if (unitType === "volume") {
        result = convertVolume(value, fromUnit, toUnit);
    } else if (unitType === "speed") {
        result = convertSpeed(value, fromUnit, toUnit);
    } else if (unitType === "time") {
        result = convertTime(value, fromUnit, toUnit);
    }

    document.getElementById('convertedValue').innerText = result;
});

// Length conversion
function convertLength(value, fromUnit, toUnit) {
    if (fromUnit === "meters" && toUnit === "kilometers") {
        return value / 1000;
    } else if (fromUnit === "meters" && toUnit === "miles") {
        return value / 1609.34;
    } else if (fromUnit === "meters" && toUnit === "inches") {
        return value * 39.3701;
    } else if (fromUnit === "kilometers" && toUnit === "meters") {
        return value * 1000;
    } else if (fromUnit === "kilometers" && toUnit === "miles") {
        return value / 1.60934;
    } else if (fromUnit === "miles" && toUnit === "kilometers") {
        return value * 1.60934;
    }
    return value;
}

// Temperature conversion
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        return value * 9/5 + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        return value + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        return (value - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        return (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        return value - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        return (value - 273.15) * 9/5 + 32;
    }
    return value;
}

// Weight conversion
function convertWeight(value, fromUnit, toUnit) {
    if (fromUnit === "grams" && toUnit === "kilograms") {
        return value / 1000;
    } else if (fromUnit === "grams" && toUnit === "pounds") {
        return value * 0.00220462;
    } else if (fromUnit === "kilograms" && toUnit === "grams") {
        return value * 1000;
    } else if (fromUnit === "kilograms" && toUnit === "pounds") {
        return value * 2.20462;
    } else if (fromUnit === "pounds" && toUnit === "grams") {
        return value * 453.592;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
        return value / 2.20462;
    }
    return value;
}

// Area conversion
function convertArea(value, fromUnit, toUnit) {
    if (fromUnit === "squaremeters" && toUnit === "squarekilometers") {
        return value / 1000000;
    } else if (fromUnit === "squaremeters" && toUnit === "squaremiles") {
        return value / 2589988;
    } else if (fromUnit === "squaremeters" && toUnit === "acres") {
        return value * 0.000247105;
    }
    return value;
}

// Volume conversion
function convertVolume(value, fromUnit, toUnit) {
    if (fromUnit === "liters" && toUnit === "cubicmeters") {
        return value / 1000;
    }
    return value;
}

// Speed conversion
function convertSpeed(value, fromUnit, toUnit) {
    if (fromUnit === "meterssecond" && toUnit === "kilometershour") {
        return value * 3.6;
    } else if (fromUnit === "kilometershour" && toUnit === "meterssecond") {
        return value / 3.6;
    }
    return value;
}

// Time conversion
function convertTime(value, fromUnit, toUnit) {
    if (fromUnit === "seconds" && toUnit === "minutes") {
        return value / 60;
    } else if (fromUnit === "minutes" && toUnit === "seconds") {
        return value * 60;
    } else if (fromUnit === "seconds" && toUnit === "hours") {
        return value / 3600;
    }
    return value;
}
