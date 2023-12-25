const pantalla = document.querySelector("#pantalla");               //Agarramos la pantalla en una constante
const botones = document.querySelectorAll(".btn");                  //Agarramos los botones en una constante

botones.forEach(boton => {                                          //PorCada boton
    boton.addEventListener("click", () => {                         //habra un eventListener "click"
        
        const botonApretado = boton.textContent;                    
                                                                    
        if(boton.id === "resolver"){                                
            pantalla.textContent = eval(pantalla.textContent);      //Parte logica detras del boton "resolver"
            return;
        }

        if(pantalla.textContent === "0"){                           //Si el textContent de la pantalla es "0"
            pantalla.textContent = botonApretado;                   //se cambia el "0" por el botonApretado
        } else {                                                    //En cambio, si el textContent es otro valor,
            pantalla.textContent += botonApretado;                  //se le sumara el nuevo botonApretado y asi consecutivamente
        }
        
        if(boton.id === "reinicio"){                                //Si el id del boton es "reinicio"
            pantalla.textContent = "0";                             //no se escribira "C", se escribira "0"
        }

    })
})