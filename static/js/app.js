
import {MomentFormater} from './modules/momentFormater.js';



document.addEventListener('DOMContentLoaded', () =>{
    let momentF = new MomentFormater('moment-cultures-container');
    document.getElementById("format").addEventListener('keyup', (formatChangeEvent) =>{
        momentF.updateCultureFields(formatChangeEvent.target.value);        
    });
   
});

