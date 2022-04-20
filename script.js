/* Tienes una función que recibe un String y retorna un Int, la idea es que esa función retorne el index del primer caracter que no se repite en el string, por ejemplo: falafas, que retorne el index de la L, en caso de que no exista caracter que no se repita, que devuelva -1 */

const data = document.querySelector(".inputString")
const result = document.querySelector(".viewResult")

function firstString() {

    const getString = data.value
    const arraySplit = getString.split("")

    const viewArray = arraySplit.map((element) => {
        return arraySplit.indexOf(element)
    })

    const position = viewArray.find(element => viewArray.indexOf(element) === viewArray.lastIndexOf(element))

    if (isNaN(position)){
        result.innerHTML = "-1"
    }else{
        result.innerHTML = position
    }
    
}

function deleteInput (){
    const deleteData = data.value = ""
    result.innerHTML = ""
}