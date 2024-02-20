function semestre() {
    let choixSemestre = document.querySelectorAll(".columng input")
    //console.log(choixSemestre[0])
    for(let index = 0; index < choixSemestre.length; index++) {
        choixSemestre[index].addEventListener("change", (event) => {
            if(event.target.value === '1') {
                afficherSemestre(1)
                verifExistance("columnd", "input")
                verifExistance("columnd", "label")
                verifExistance("columnd", "br")

            }
            else if(event.target.value === '2') {
                afficherSemestre(2)
                entreeBR()
            }
        })
    }
}

function afficherSemestre(value) {
    verifExistance("columng", "select")
    let nouveauSelect = document.createElement("select")
    for(let i=1; i<=10; i++) {
        let nouveauOption = document.createElement("option")
        nouveauOption.value = `${i}`
        nouveauOption.text = `0${i}` 
        nouveauSelect.appendChild(nouveauOption)
    }
    console.log(nouveauSelect)

    if(value === 1) {
        let button = document.getElementById("TC")
        //button.parentNode.insertBefore(nouveauSelect, button.nextSibling)
        button.nextElementSibling.insertAdjacentElement("afterend", nouveauSelect);
        
    }
    else if(value === 2) {
        let button = document.getElementById("GX")
        //button.parentNode.insertBefore(nouveauSelect, button.nextSibling)
        button.nextElementSibling.insertAdjacentElement("afterend", nouveauSelect);
    }

}


function verifExistance(str, type) {
    let verif = document.querySelectorAll(`.${str} ${type}`)
    if(verif) {
        for(let index = 0; index < verif.length; index++) {
            let parent = document.querySelector(`.${str}`)
            parent.removeChild(verif[index])
        }
    }
}


function entreeBR() {
    verifExistance("columnd", "input")
    verifExistance("columnd", "label")
    verifExistance("columnd", "br")
    //let tab = ["entreeTC", "entreeBR"]
    let entreeTC = document.createElement("input")
    entreeTC.type = "radio"
    entreeTC.id = "entreeTC"
    entreeTC.name = "entr"
    entreeTC.value = "1"

    let labelTC = document.createElement("label")
    labelTC.for = "entreeTC"
    labelTC.textContent = "Entrée en TC"

    let entreeBR = document.createElement("input")
    entreeBR.type = "radio"
    entreeBR.id = "entreeBR"
    entreeBR.name = "entr"
    entreeBR.value = "2"

    let labelBR = document.createElement("label")
    labelBR.for = "entreeBR"
    labelBR.textContent = "Entrée en Branche"

    let br = document.createElement("br")

    let column = document.querySelector(".columnd")
    column.appendChild(entreeTC)
    column.appendChild(labelTC)
    column.appendChild(br)
    column.appendChild(entreeBR)
    column.appendChild(labelBR)
}



semestre()