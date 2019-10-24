import {momentCultures} from '../../db/cultures.js';

class MomentFormater{   

    constructor(containerId){
      this.defaultFormat = 'MMMM Do YYYY, h:mm:ss';
      this.state = this.initBinding(this.initState());
      this.firstUserInputOk = false;
      this.buildCultureContainers(containerId);    

      //this.updateCultureFields(this.defaultFormat, true);
      let curentTime = moment();    
      momentCultures.forEach(mc =>{ this.state[mc.lc] = curentTime.locale(mc.lc).format(this.defaultFormat) });
      
      setInterval(this.updateCultureFields.bind(this), 1000, undefined, true);

    }

    initBinding(state){
        return new Proxy(state,{
            set(target, property, value){
                target[property] = value;               
                document.getElementById(property).querySelector('p').innerHTML = value;
                return true;
            }
        });        
    }

    initState(){
        let initialState= [];
        momentCultures.forEach(mc =>{ initialState[mc.lc] = '' });
        return initialState
    }

    updateCultureFields(format, timer){
        let inputElement = document.getElementById('format');               

        if(timer === true)
           format = inputElement.value === '' ? this.defaultFormat : inputElement.value;
        else
            inputElement.classList.remove("is-error", "is-success");

        if(format === undefined || format === '')
            return;
        
        let curentTime = moment();    
        let isFormatValid = moment(curentTime.format(format),format, true).isValid();

        if(isFormatValid){
            //Update state
            momentCultures.forEach(mc =>{ this.state[mc.lc] = curentTime.locale(mc.lc).format(format) });
            
            if(!timer){
                inputElement.classList.add('is-success');
                Array.prototype.forEach.call(document.getElementsByClassName('date-formated'), (el) =>{ el.style.color = 'black'; });
            }else{
                if(format === this.defaultFormat && inputElement.value ==='')
                    Array.prototype.forEach.call(document.getElementsByClassName('date-formated'), (el) =>{ el.style.color = 'gray'; });
            }
        }            
        else
            inputElement.classList.add('is-error');       
    }


    buildCultureContainers(cultureContainerId){   
        momentCultures.sort(mc=>mc.tl===true ? -1 : 1).forEach(mc => {
            
            let dateTimeParagraf = document.createElement('p');
            dateTimeParagraf.classList.add('date-formated');

            let dateTimeContainer = document.createElement('div');
            dateTimeContainer.classList.add('date-time-container');
            dateTimeContainer.appendChild(dateTimeParagraf);

            let cultureNameTitle = document.createElement('h3');
            cultureNameTitle.classList.add('culture-name');
            cultureNameTitle.innerText = mc.ld
            
            let momentCultureContainer = document.createElement('div');
            momentCultureContainer.id = mc.lc;
            momentCultureContainer.classList.add('moment-culture-container', 'nes-container', 'is-rounded');
            momentCultureContainer.appendChild(cultureNameTitle);
            momentCultureContainer.appendChild(dateTimeContainer);
            
            // <div aria-hidden='true' class='hidden-hack'></div>

            document.getElementById(cultureContainerId).appendChild(momentCultureContainer);
        });
    }
}

export { MomentFormater };