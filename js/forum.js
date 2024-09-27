$(document).ready(function () {
    $("#btnSoumettre").click(afficher);
	
	document.cookie = "username=votreIdentifiantPersonnelConfidentiel";
	
	// On met des textes initiaux bidons dans le forum
    ajouterTextesBidons($('#contenu'));
});

//échapper les caractères spéciaux
function afficher() {
   if($('#ajout').val() != '')
   {
        var txt = escapeHTML($('#ajout').val());
        ajouterTexte($('#contenu'), txt);
   }
}

function ajouterTextesBidons(table)
{
	// On met des textes initiaux bidons dans le forum
	ajouterTexte(table, 'Fernand03 : Salut tout le monde, est-ce que quelqu\'un a déjà entendu parler du XSS?');
    ajouterTexte(table, 'Bob: Ouin, y paraît qu\'cé dangereux!');
    ajouterTexte(table, 'Jérôme Cégep Riki: Seulement si l\'application Web est mal protégée. Si vous créez une application ASP.net avec Razor dans Visual Studio, l\'IDE vous protège du XSS. Toutefois, les applications en PHP ou en javascript sont plus vulnérables et nécessitent l\'intervention du développeur.');
}

function escapeHTML(txt) {
    return txt.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

/*
-Échapper les caractères spéciaux pour ne pas qu'ils soient interprétés comme du code
- Utiliser textContent pour éviter l'interprétation 
*/
function ajouterTexte(table, txt) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = escapeHTML(txt);
    tr.appendChild(td);
    table.append(tr);
}

