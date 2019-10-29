
import {MomentFormater} from './modules/momentFormater.js';
import {PlaceHolderWrittingAnimation} from './modules/placeholderWrittingAnimation.js';

const inputExamples =  [ "DD MM YYYY",
                        "hh:mm:ss",
                        "MMMM Do YYYY, h:mm:ss"
                        ];

document.addEventListener('DOMContentLoaded', () =>{
    let inputAnimation = new PlaceHolderWrittingAnimation('format', inputExamples);
    let momentF = new MomentFormater('moment-cultures-container');

    let inputField = document.getElementById("format");
    inputField.addEventListener('click', () =>{
        inputAnimation.stopAnimation();        
    });
    inputField.addEventListener('keyup', (formatChangeEvent) =>{
        momentF.updateCultureFields(formatChangeEvent.target.value);        
    });

    let formatDialog = document.getElementById('date-formats-dialog');
    let dialogBackground = document.getElementById('dialog-backgorund');
    document.getElementById('show-date-formats').addEventListener('click', () =>{
        formatDialog.style.display ='block';
        dialogBackground.style.display='block';
    });

    //Closing dialog triggers
    Array.prototype.forEach.call(document.getElementsByClassName('close-dialog'), closeDialogTrigger =>  
        closeDialogTrigger.addEventListener('click', () => {
                                                formatDialog.style.display = 'none';
                                                dialogBackground.style.display = 'none';
    }));

    let formatWrapper = document.getElementById('format-wrapper');
    document.addEventListener('scroll', () =>{
        formatWrapper.getBoundingClientRect().y === 0 ? formatWrapper.classList.add('shadow') : formatWrapper.classList.remove('shadow');
    });

    Textblock && Textblock([{ target: "h3"},{target: "#format", container:"self", minWidthFontSize: 1}]);
});

