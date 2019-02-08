//https://datatables.net/

var personeTabella = [//Persone dentro la tabella
  ["Jonathan", "Joestar", "04-04-1868", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica' >Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Joseph", "Joestar", "27-09-1920", "oltre 75.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Jotaro", "Kujo", "18-12-1970", "0-25.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Josuke", "Higashikata", "21-03-1983", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Giorno", "Giovanna", "16-04-1985", "0-25.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Jolyne", "Cujoh", "12-06-1992", "0-25.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Johnny", "Joestar", "11-05-1872", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Josuke", "Higashikata", "11-07-1992", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Mario", "Rossi", "15-09-2003", "oltre 75.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Maria", "Rosa", "20-12-1983", "25.000-50.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Rias", "Gremory", "02-04-1999", "oltre 75.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Giovanna", "D'Arco", "06-01-1412", "0-25.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"]
];
var persone = [];
var table;

$(document).ready(function () {
  table = $('#example').DataTable({
    "columnDefs": [
      
      { type: 'date-dd-mmm-yyyy', targets: 2 },
      { "orderable": false, "targets": 6 },
      { "orderable": false, "targets": 5 }
    ],
    "language": {

      "lengthMenu": 'Mostra <select>' +
        '<option value="5">5</option>' +
        '<option value="10">10</option>' +
        '<option value="25">25</option>' +
        '<option value="50">50</option>' +
        '<option value="100">100</option>' +
        '<option value="-1">Tutti</option>' +
        '</select> record per pagina',
      "zeroRecords": "Spiacenti - non ci sono record nella tabella",
      "info": "Pagina _PAGE_ di _PAGES_",
      "infoEmpty": "Nessun record disponibile",
      "infoFiltered": "(filtered from _MAX_ total records)",
      "search": "Cerca:",
      "paginate": {
        "first": "<<",
        "last": ">>",
        "next": ">",
        "previous": "<"
      },
    },
    "pagingType": "full_numbers",
    responsive: true,
    data: personeTabella,//Preleva i dati dall'array persone
    columns: [//Crea gli header della tabella
      { title: "Nome" },
      { title: "Cognome" },
      { title: "Data di nascita" },
      { title: "Reddito" },
      { title: "Sesso" },
      { title: "" },
      { title: "" }
    ],

    "info": false,
    "dom": '<"row"<"#bottone.col-8"><"col-4" f>><t><lp>',/* Dispone in quest'ordine:
f = cerca
t = tabella
l = Mostra N_PAG di TOT_PAG
p = paginatore
*/
  });
  $("#bottone").html('<button type="button" class="my-3 btn btn-primary" data-toggle="modal" data-target="#formAggiungi" id="btnAggiungi" onclick="CancellaForm();">Aggiungi</button>');

  for (var i = 0; i < personeTabella.length; i++) {//Carica l'array di persone
    pers = new Persona(personeTabella[i]);
    persone.push(pers);
  }

  //Aggiungi
  $('#aggiungi').on('click', function () {
    if (ControllaCampo("#nome", "#smallnome") && ControllaCampo("#cognome", "#smallcognome")) {
      var sesso;
      if ($("#male").prop("checked")) {
        sesso = "Maschio";
      }
      else {
        sesso = "Femmina";
      }
      pT = [$("#nome").val(), $("#cognome").val(), $("#data").val(), $("#reddito").val(), sesso];
      p = new Persona(pT);
      pT = p.ToArray();
      table.row.add(pT).draw(false);//Aggiunge e disegna la riga
      Refresh();
      $('#formAggiungi').modal('toggle');//Chiude la form modale
    }
  });

  function formatDate (input) {
    var anno = input.substr(0, 4);
    var mese = input.substr(5, 2);
    var giorno = input.substr(8, 2);
    return giorno+"-"+mese+"-"+anno;
  }
  

  //Elimina
  //Aggiunge la classe selected alla tr del bottone premuto (che è genitore del genitore)
  $('#example tbody').on('click', '.btn', function () {
    table.$('tr.selected').removeClass('selected');
    $(this).parent().parent().addClass('selected');
  });
  $('#elimina').click(function () {//Rimuove l'elemento con classe selected
    table.row('.selected').remove().draw(false);
    Refresh();
  });

  //Modifica
  $('button.btn-success').click(function () {//Quando premi il tasto nella tabella
    Refresh();
    table.$('tr.selected').removeClass('selected');
    $(this).parent().parent().addClass('selected');
    ApriInModifica();
  });
  $('#modifica').click(function () {//Quando premi il tasto nella form modale
    if (ControllaCampo("#modnome", "#smallnome") && ControllaCampo("#modcognome", "#smallmodcognome")) {
      var sesso;
      if ($("#modmale").prop("checked")) {
        sesso = "Maschio";
      }
      else {
        sesso = "Femmina";
      }
      pT = [$("#modnome").val(), $("#modcognome").val(), $("#moddata").val(), $("#modreddito").val(), sesso];
      p = new Persona(pT);
      pT = p.ToArray();
      table.row(".selected").data(pT).draw(false);//Modifica e disegna la riga
      Refresh();
      $('#formModifica').modal('toggle');//Chiude la form modale
    }
  });

});

function Refresh() {//Aggiorna i dati nell'array di persone
  persone = [];
  var a = table.data();//Prende i dati salvati nella tabella sottoforma di matrice
  for (var i = 0; i < a.length; i++) {
    p = new Persona(a[i]);
    persone.push(p);
  }
  personeTabella = table.data();
}

function ApriInModifica() {//Apre la form con i campi da modificare
  var temp = (table.row('.selected').data());
  $("#modnome").val(temp[0]);
  $("#modcognome").val(temp[1]);
  $("#moddata").val(temp[2]);
  $("#modreddito").val(temp[3]);
  if (temp[4] == "Maschio") {
    $("#modmale").prop("checked", "true");
  }
  else {
    $("#modfemale").prop("checked", "true");
  }
}

function ControllaCampo(id, smallid) {//Controlla che i campi siano inseriti
  if ($(id).val() == null || $(id).val() == "") {
    $(id).addClass("border-danger");
    $(smallid).text("*Questo campo è obbligatorio!");
    return false;
  }
  else {
    var regexp = /^[a-zA-Z]/;
    if (regexp.test($(id).val())) {
      $(id).removeClass("border-danger");
      $(smallid).text("");
      return true;
    }
    else
      $(id).addClass("border-danger");
    $(smallid).text("*Questo campo non è corretto!\n(Puoi inserire solo lettere maiuscole e minuscole)");
    return false;

  }
}

function CancellaForm() {//Resetta le textbox e i dati dalla form aggiungi
  $("#nome").val("");
  $("#cognome").val("");
  $("#data").val("");
  $("#reddito").val("0-25.000 €");
  $("#male").prop("checked");
}

class Persona {
  constructor(array) {
    this.nome = array[0];
    this.cognome = array[1];
    this.datanascita = array[2];
    this.reddito = array[3];
    this.sesso = array[4];
  }
  ToArray() {//Trasforma in un'array da inserire nella tabella
    var modifica = "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>";
    var elimina = "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>";
    //Formatta data
    var anno = this.datanascita.substr(0, 4);
    var mese = this.datanascita.substr(5, 2);
    var giorno = this.datanascita.substr(8, 2);
    var data = giorno+"-"+mese+"-"+anno;

    var array = [this.nome, this.cognome, data, this.reddito, this.sesso, modifica, elimina];
    return array;
  }
}
