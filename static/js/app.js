
import {MomentFormater} from './modules/momentFormater.js';



document.addEventListener('DOMContentLoaded', () =>{
    let momentF = new MomentFormater('moment-cultures-container');
    document.getElementById("format").addEventListener('keyup', (formatChangeEvent) =>{
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
        closeDialogTrigger.addEventListener('click', () =>{
                                                formatDialog.style.display = 'none';
                                                dialogBackground.style.display = 'none';
    }));


    let formatWrapper = document.getElementById('format-wrapper');
    document.addEventListener('scroll', () =>{
        formatWrapper.getBoundingClientRect().y === 0 ? formatWrapper.classList.add('shadow') : formatWrapper.classList.remove('shadow');
    });

    Textblock && Textblock([{ target: "h3"},{target: "#format", container:"self", minWidthFontSize: 0.5}]);
});

