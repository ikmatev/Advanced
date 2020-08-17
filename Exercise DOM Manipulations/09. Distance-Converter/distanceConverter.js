function attachEventsListeners() {
    const inputField = document.getElementById('inputDistance');
    const outputField = document.getElementById('outputDistance');
    const inputUnit = document.getElementById('inputUnits');
    const outputUnit = document.getElementById('outputUnits');
    const button = document.getElementById('convert');

    button.addEventListener('click',convert);

    function convert(e){
        let toMeter = convertInputToMeters(inputField.value, inputUnit.value)
        let toOutput = convertMeterToOutput(toMeter, outputUnit.value)
        outputField.value = toOutput;
        outputField.disabled = false;
    }
    function convertMeterToOutput(fieldValue, unit){
        let converter = {
            km: a => a / 1000,
            m: a => a,
            cm: a => a * 100,
            mm: a => a * 1000,
            mi: a => a / 1609.34,
            yrd: a => a / 0.9144,
            ft: a => a / 0.3048,
            in: a => a / 0.0254,
        }
        return converter[unit](fieldValue);
    }
    function convertInputToMeters(fieldValue, unit){ 
        let converter = {
            km: a => a * 1000,
            m: a => a,
            cm: a => a / 100,
            mm: a => a / 1000,
            mi: a => a * 1609.34,
            yrd: a => a * 0.9144,
            ft: a => a * 0.3048,
            in: a => a * 0.0254,
        }
        return converter[unit](fieldValue);
    }

}