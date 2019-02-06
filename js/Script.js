
/*$(document).ready(function(){
})*/
var persone = [];

$(document).ready(function () {
    $("#aggiungi").click(function(){
        var sesso;
        if( $("#male").prop( "checked" )){
            sesso = "Maschio";
        }
        else{
            sesso = "Femmina";
        }
        p = new Persona($("#nome").val(), $("#cognome").val(), $("#data").val(), $("#reddito").val(), sesso);
        persone.push(p);
        var stampa = "";
        for(var i = 0; i < persone.length; i++){
            stampa += ("<tr> <td>"+persone[i].nome+"</td> <td>"+persone[i].cognome+"</td> <td>"+persone[i].datanascita+"</td> <td>"+persone[i].reddito+"</td> <td>"+persone[i].sesso+"</td> <td>Elminia</td> <td>Modifica</td> </tr>");
        }
        $("#tabella").html(stampa);
    });
});

class Persona {
    constructor(nome, cognome, datanascita, reddito, sesso) {
        this.nome = nome;
        this.cognome = cognome;
        this.datanascita = datanascita;
        this.reddito = reddito;
        this.sesso = sesso;
    }

    /*controlloEsistenza(campo) {
        if(campo == null || campo == "undefined"){
            return false;
        }
        else{
            return true;
        }
    }

    controlloData(campo){
        if(controlloEsistenza(campo)){
            if()
        }
    }*/

}
/*class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width;
  }
}*/