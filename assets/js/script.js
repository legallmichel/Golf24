// On récupère l’élément ‘note’ dans lequel on va inscrire des informations
var note = $(‘#note’);
// Création de l’objet ‘date’ (année / mois / jour) ici initialisé au : 9 mars 2012
// Attention les mois commencent à 0 !

var ts = new Date(2012, 2, 9);
$(‘#countdown’).countdown({
timestamp       : ts,
callback        : function(days, hours, minutes, seconds){
…
}
});

var message = "";
message += days + " jour" + ( days==1 ?  »:’s’ ) + ", ";
message += hours + " heur" + ( hours==1 ?  »:’s’ ) + ", ";
message += minutes + " minute" + ( minutes==1 ?  »:’s’ ) + " and ";
message += seconds + " seconde" + ( seconds==1 ?  »:’s’ ) + " <br />";

if (newYear) {
message += "avant l’événement !";
}
else {
message += "Il ne reste plus 10 jours à partir de maintenant !";
}

note.html(message);
