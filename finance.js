/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var loan = new Loan();

function Loan(){
    this.PV;
    this.FV;
    this.Interest;
}

function computeFV(PV,interest,N){
    i = interest /100;
    var temp = PV * Math.pow((1 + i),N);
    var FV = temp.toFixed(2);
    document.getElementById("FV").value = FV;
}


function clearContent(element){
    element.value = '';
}

