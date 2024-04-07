//Manipulación del DOOM
let buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener("click", e => {
        e.preventDefault();
    })
}
var app = angular.module("lista", []);
app.controller("listaController", function($scope) {
    //Variables
    $scope.tarea = {
        nombre: "",
        estado: "pendiente"
    };
    $scope.mostrarFormulario = false;

    //-----------Cargar local storage------------
    let tareasStorage = localStorage.getItem("tareas");
    if (tareasStorage) {
        $scope.tareas = JSON.parse(tareasStorage);
    } else {
        $scope.tareas = [];
    }
    //Métodos
    $scope.cambiarEstado = function(estado) {
        $scope.mostrarFormulario = estado;
    }
    $scope.insertarTarea = function() {
        $scope.tareas.push(Object.assign({}, $scope.tarea));
        guardarenLocalStorage($scope.tareas)
    }

    $scope.eliminar = function(tarea) {
        $scope.tareas.splice($scope.tareas.indexOf(tarea), 1);
        guardarenLocalStorage($scope.tareas)

    }

    $scope.modificarEstadoTarea = function(tarea, estado) {
            console.log(estado);
            if (estado == "pendiente") {
                tarea.estado = "completado"
            } else {
                tarea.estado = "pendiente"
            }
            guardarenLocalStorage($scope.tareas);
        }
        //Guardar Local Storage
    function guardarenLocalStorage(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }

})