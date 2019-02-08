//https://datatables.net/

var personeTabella = [//Persone dentro la tabella
  ["Jonathan", "Joestar", "1868-04-04", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Joseph", "Joestar", "1920-09-27", "oltre 75.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Jotaro", "Kujo", "1970-12-18", "0-25.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Josuke", "Higashikata", "1983-08-21", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Giorno", "Giovanna", "1985-04-16", "0-25.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Jolyne", "Cujoh", "1992-06-12", "0-25.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Johnny", "Joestar", "1872-05-11", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Josuke", "Higashikata", "1992-07-11", "25.000-50.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Mario", "Rossi", "2003-09-15", "oltre 75.000 €", "Maschio", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Maria", "Rosa", "1983-12-20", "25.000-50.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Rias", "Gremory", "1999-04-02", "oltre 75.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"],
  ["Giovanna", "D'Arco", "1412-01-06", "0-25.000 €", "Femmina", "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#formModifica'>Modifica</button>", "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#formElimina'>Elimina</button>"]
];
var persone = [];
var table;

$(document).ready(function () {
  var a = "Ciao ";
  var b = "sono una variabile";
  var c = a+b;
  alert(c);
  table = $('#example').DataTable({
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
    ]


  });

  for (var i = 0; i < personeTabella.length; i++) {//Carica l'array di persone
    pers = new Persona(personeTabella[i]);
    persone.push(pers);
  }

  //Aggiungi
  $('#aggiungi').on('click', function () {
    if (ControllaCampo("#nome", "#smallnome") && ControllaCampo("#cognome", "#smallcognome") && ControllaCampo("#data", "#smalldata")) {
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
    if (ControllaCampo("#modnome", "#smallnome") && ControllaCampo("#modcognome", "#smallmodcognome") && ControllaCampo("#moddata", "#smallmoddata")) {
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
  personeTabella=table.data();
}

function ApriInModifica() {//Apre la form con i campi da modificare
  var temp = (table.row('.selected').data());
  $("#modnome").val(temp[0]);
  $("#modcognome").val(temp[1]);
  $("#moddata").val(temp[2]);
  $("#modreddito").val(temp[3]);
  if (temp[4] == "Maschio") {
    $("#modmale").prop("checked" , "true");
  }
  else {
    $("#modfemale").prop("checked" , "true");
  }
}

function ControllaCampo(id, smallid) {//Controlla che i campi siano inseriti
  if ($(id).val() == null || $(id).val() == "") {
    $(id).addClass("border-danger");
    $(smallid).text("*Questo campo è obbligatorio");
    return false;
  }
  else {
    $(id).removeClass("border-danger");
    $(smallid).text("");
    return true;
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
    var array = [this.nome, this.cognome, this.datanascita, this.reddito, this.sesso, modifica, elimina];
    return array;
  }
}
