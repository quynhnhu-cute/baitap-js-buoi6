function Validator(){
    this.checkPositiveInteger = function(value,spanId, errorMessage){
        if(!value || (parseFloat(value) % 1) !== 0 || parseFloat(value) < 0){
            // debugger
            document.getElementById(spanId).innerHTML = errorMessage;
            return false;
        }
        return true;
    }
    
}