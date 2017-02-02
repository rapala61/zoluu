import Mustache from 'mustache';
import template from './energy_audit.html';

import styles from './energy_audit.scss';

const data = {
  styles
};

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template, data);


// ZOHO FORM JS

const mndFileds = ['Company', 'Last Name', 'First Name', 'Email', 'Phone'];

const fldLangVal = ['Company', 'Last Name', 'First Name', 'Email', 'Phone'];

let name = '';

let email = '';

function checkMandatory() {

  for(i=0;i<mndFileds.length;i++) {

    const fieldObj=document.forms['WebToLeads1862269000000289001'][mndFileds[i]];

    if(fieldObj) {

      if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {

        if(fieldObj.type =='file') {
          alert('Please select a file to upload.');
          fieldObj.focus();
          return false;
        }

        alert(fldLangVal[i] +' cannot be empty.');
        fieldObj.focus();
        return false;

      } else if(fieldObj.nodeName=='SELECT') {

        if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
          alert(fldLangVal[i] +' cannot be none.');
          fieldObj.focus();
          return false;
        }

    } else if(fieldObj.type =='checkbox'){

      if(fieldObj.checked == false){

        alert('Please accept  '+fldLangVal[i]);
        fieldObj.focus();
        return false;
      }
    }

    try {
      if(fieldObj.name == 'Last Name') {
        name = fieldObj.value;
       }
    } catch (e) {}
  }
}
}
