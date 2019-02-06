
$(document).ready(function(){
    
p = new persona("a","b","c","d","e");
$("#elimina").click(function(){
    p.Esistenza();
});
})

class persona{
    constructor(nome, cognome, datanascita, reddito, sesso){
        this.nome = nome;
        this.cognome = cognome;
        this.datanascita = datanascita;
        this.reddito = reddito;
        this.sesso = sesso;
    }
    
    controlloEsistenza(campo) {
        return alert(campo);
    }

    get Esistenza(){
        return this.controlloEsistenza();
    }
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