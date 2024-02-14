function calculateEllipseArea(){
    const majorR = getInputValueById('ellipse-major-radius')
    const minorR = getInputValueById('ellipse-minor-radius')

    const area = 3.1416 * majorR * minorR ;
    setInnerTextById('ellipse-area', area)
}   

// ----------> since we have written the code already in other page we don't have to write it here again. yet i commented and saved the code that i've written myself to understand the process of the function set up again.<-------

// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.value;
//     const input = parseFloat(inputValueText);
//     return input;
// }

// function setInnerTextById(elementId, area){
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }