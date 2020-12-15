window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}
// we just need some css to make this better      how much do we need to do/ what is this for?     