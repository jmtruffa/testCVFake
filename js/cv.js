window.onload = function() {
    var modal = document.getElementById("myModal");

    //Defino los botones que abren el modal
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    

    //Tomo el elemento span que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    //llamo a la funcion openModal() cuando se hace click en los botones

    btn1.onclick = function() {
        openModal("Si bien trabajo como freelance, me he desempeñado realizando algunos proyectos puntuales para ciertas compañías, por lo que se puede decir que más que freelance, me encuentro trabajando de una manera temporal (en base a proyectos) para algunas compañías.",
        this);
      }
    btn2.onclick = function() {
        openModal("2.- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        this);
      }
    btn3.onclick = function() {
        openModal("3.- There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        this);
      }


    // Funcion que muestra el modal, establece el texto y le da distinto padding según de qué botón viene
    function openModal(text, button) {
        modal.style.display = "block";
        document.getElementById("modal-text").innerHTML = text;
        /*document.getElementById("myModal").style.paddingTop = paddingTop;*/
        var buttonRect = button.getBoundingClientRect(); // traemos la posición del botón que llamó al modal
        var buttonX = buttonRect.left + buttonRect.width / 2; // calculamos la posición horizontal del centro del botón
        var buttonY = buttonRect.top + buttonRect.height / 2; // calculamos la posición vertical del centro del botón

        modal.style.left = buttonX - modal.offsetWidth / 2 + 'px'; // establecemos la posición horizontal del modal
        modal.style.top = buttonY - modal.offsetHeight / 2 + 'px'; // establecemos la posición vertical del modal
      }

    // Cierra el modal cuando se hace click en el span
     span.onclick = function() {
    modal.style.display = "none";
    }

    //Cierra el modal si se hace click fuera del modal
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

}


