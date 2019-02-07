/*<td><button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>
            Elimina
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Vuoi eliminare il record?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Si</button>
                </div>
              </div>
            </div>
          </div>
        </td>*/
var persone = [];
var indiceCorrente;//Indice del record su cui si ha cliccato elimina/modifica

$(document).ready(function () {
    $("#aggiungi").click(function(){//Quando clicchi su aggiungi
        var sesso;
        if( $("#male").prop( "checked" )){
            sesso = "Maschio";
        }
        else{
            sesso = "Femmina";
        }
        p = new Persona($("#nome").val(), $("#cognome").val(), $("#data").val(), $("#reddito").val(), sesso);
        persone.push(p);//Aggiunge all'array
        Refresh();
    });
});

function AggiornaIndice(index){//Aggiorna indiceCorrente quando clicchi su modifica/elimina
    indiceCorrente = index;
}

function Refresh(){//Aggiorna la tabella
    var stampa = "";
    for(var i = 0; i < persone.length; i++){
        var elimina ="</td> <td><button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina' onclick='AggiornaIndice("+i+");'>Elimina</button></td>";
        var modifica ="</td> <td><button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica' onclick='AggiornaIndice("+i+");'>Modifica</button></td>";
        stampa += ("<tr> <td>"+persone[i].nome+"</td> <td>"+persone[i].cognome+"</td> <td>"+persone[i].datanascita+"</td> <td>"+persone[i].reddito+"</td> <td>"+persone[i].sesso+""+elimina+""+modifica);
    }
    $("#tabella").html(stampa);
}

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