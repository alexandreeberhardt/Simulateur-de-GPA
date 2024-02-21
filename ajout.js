
//On crée le formulaire complet pour ajouter une UV avec les select option et inputs

let NomUV = document.createElement("input")
NomUV.type="text";
NomUV.id="NomUV";
NomUV.name="UV";
NomUV.size=5;
NomUV.placeholder="Nom UV";
let Categorie = document.createElement("select")
let Categorie1 = document.createElement("option")
Categorie1.value="1";
Categorie1.textContent="CS"
let Categorie2 = document.createElement("option")
Categorie2.value="2";
Categorie2.textContent="TM"
let Categorie3 = document.createElement("option")
Categorie3.value="3";
Categorie3.textContent="TSH"
let Categorie4 = document.createElement("option")
Categorie4.value="4";
Categorie4.textContent="SP"
let Categorie5 = document.createElement("option")
Categorie5.value="5";
Categorie5.textContent="autre"
let Credits = document.createElement("input")
Credits.type="number";
Credits.id="NBcredits" ;
Credits.name="NBcredits";
Credits.placeholder="Crédits";
Credits.style="width: 60px;"
let Lettre = document.createElement("select")
let LettreA = document.createElement("option")
LettreA.value="6";
LettreA.textContent="A";
let LettreB = document.createElement("option")
LettreB.value="5";
LettreB.textContent="B";
let LettreC = document.createElement("option")
LettreC.value="4";
LettreC.textContent="C";
let LettreD = document.createElement("option")
LettreD.value="3";
LettreD.textContent="D";
let LettreE = document.createElement("option")
LettreE.value="2";
LettreE.textContent="E";
let LettreFx = document.createElement("option")
LettreFx.value="1";
LettreFx.textContent="Fx";
let LettreF = document.createElement("option")
LettreF.value="0";
LettreF.textContent="F";
let Formulaire = document.createElement("form")


//On insere les parties dans le formulaire

Categorie.appendChild(Categorie1)
Categorie.appendChild(Categorie2)
Categorie.appendChild(Categorie3)
Categorie.appendChild(Categorie4)
Categorie.appendChild(Categorie5)

Lettre.appendChild(LettreA)
Lettre.appendChild(LettreB)
Lettre.appendChild(LettreC)
Lettre.appendChild(LettreD)
Lettre.appendChild(LettreE)
Lettre.appendChild(LettreFx)
Lettre.appendChild(LettreF)


Formulaire.appendChild(NomUV)
Formulaire.appendChild(Categorie)
Formulaire.appendChild(Credits)
Formulaire.appendChild(Lettre)

let zone = document.getElementById("zone");
let BoutonAjout = document.getElementById("ajouter");

//On écoute le bouton "ajouter" et en cas de clic on ajoute le formulaire
BoutonAjout.addEventListener("click", () => {
zone.appendChild(Formulaire)
});




