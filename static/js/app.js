
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
    document.getElementById('close-date-formats-dialog').addEventListener('click', () =>{
        formatDialog.style.display = 'none';
        dialogBackground.style.display = 'none';
    });
    Textblock && Textblock([{ target: "h3"}]);
});

