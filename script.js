/* =====================================================
   PROYECTO: MINDFULNESS
   ARCHIVO: script.js
   JavaScript
   ===================================================== */




/* =====================================================
   MÓDULO 1: CONSEJO DE MINDFULNESS
   AUTOR: Nissi
   ===================================================== */

// Buscamos el botón y el espacio donde aparecerá el consejo.
const botonConsejo =
    document.getElementById("botonConsejo");

const consejo =
    document.getElementById("consejo");


// Verificamos que los elementos existan en la página.
if (botonConsejo && consejo) {

    botonConsejo.addEventListener(
        "click",
        mostrarConsejo
    );
}


// Función para mostrar el consejo.
let numeroConsejo = 0;

function mostrarConsejo() {

    if (consejo.style.display == "none") {

        numeroConsejo =
            numeroConsejo + 1;


        if (numeroConsejo == 1) {

            consejo.textContent =
                "Respira profundo y concéntrate en el momento presente.";

        } else if (numeroConsejo == 2) {

            consejo.textContent =
                "Haz una pausa y presta atención a lo que estás haciendo.";

        } else {

            consejo.textContent =
                "Deja las distracciones a un lado y disfruta el momento.";

            numeroConsejo = 0;
        }


        consejo.style.display =
            "block";

        botonConsejo.textContent =
            "Ocultar consejo";

    } else {

        consejo.style.display =
            "none";

        botonConsejo.textContent =
            "Mostrar otro consejo";
    }
}




/* =====================================================
   MÓDULO 2: NIVEL DE ESTRÉS
   AUTOR: Marce
   ===================================================== */

const botonesEstres =
    document.querySelectorAll("[data-nivel]");

const resultadoEstres =
    document.getElementById("resultadoEstres");


botonesEstres.forEach(function (boton) {

    boton.addEventListener(
        "click",
        function () {

            let nivel =
                boton.getAttribute("data-nivel");

            evaluarEstres(nivel);
        }
    );
});


function evaluarEstres(nivel) {

    if (!resultadoEstres) {

        return;
    }


    let mensaje = "";


    if (nivel === "bajo") {

        mensaje =
            " Tu nivel de estrés parece bajo. Continúa cuidando tus hábitos de descanso, organización y bienestar.";

    } else if (nivel === "moderado") {

        mensaje =
            " Puedes incorporar pausas, respiración consciente y una mejor organización de tus actividades.";

    } else {

        mensaje =
            " Si percibes un nivel alto de estrés, considera incorporar estrategias saludables de bienestar y buscar apoyo adecuado si lo necesitas.";
    }


    resultadoEstres.textContent =
        mensaje;

    resultadoEstres.style.display =
        "block";
}




/* =====================================================
   PROYECTO MINDFULNESS
   CODE ARENA - PRACTICA EVALUADA 2

   AUTOR: Jossy

   Conceptos utilizados:
   - Herencia
   - Polimorfismo
   - Encapsulamiento
   - DOM
   - Eventos
   - Estructuras de control
   - Game Loop / Bucle de práctica
   - Temporizadores
   - Validaciones
   ===================================================== */



/* =====================================================
   MÓDULO 3: HERENCIA Y POLIMORFISMO
   ===================================================== */


/*
   CLASE PADRE
*/

class ActividadMindfulness {

    #nombre;
    #duracion;
    #puntos;


    constructor(
        nombre,
        duracion,
        puntos
    ) {

        this.#nombre =
            nombre;

        this.#duracion =
            duracion;

        this.#puntos =
            puntos;
    }


    /* GETTERS */

    get nombre() {

        return this.#nombre;
    }


    get duracion() {

        return this.#duracion;
    }


    get puntos() {

        return this.#puntos;
    }


    /* SETTERS CON VALIDACIÓN */

    set nombre(nuevoNombre) {

        if (
            typeof nuevoNombre === "string" &&
            nuevoNombre.trim() !== ""
        ) {

            this.#nombre =
                nuevoNombre;
        }
    }


    set duracion(nuevaDuracion) {

        if (
            Number.isFinite(nuevaDuracion) &&
            nuevaDuracion > 0
        ) {

            this.#duracion =
                nuevaDuracion;
        }
    }


    set puntos(nuevosPuntos) {

        if (
            Number.isFinite(nuevosPuntos) &&
            nuevosPuntos >= 0
        ) {

            this.#puntos =
                nuevosPuntos;
        }
    }


    ejecutar() {

        return "Actividad de mindfulness iniciada.";
    }


    obtenerResultado() {

        return "Actividad completada correctamente.";
    }
}




/* =====================================================
   CLASE HIJA 1
   ===================================================== */

class MeditacionGuiada
    extends ActividadMindfulness {

    constructor() {

        super(
            "Meditación guiada",
            5,
            10
        );
    }


    ejecutar() {

        return "Cierra los ojos, respira lentamente y concentra tu atención en el momento presente.";
    }


    obtenerResultado() {

        return "Has completado una práctica de meditación guiada.";
    }
}




/* =====================================================
   CLASE HIJA 2
   ===================================================== */

class RespiracionConsciente
    extends ActividadMindfulness {

    constructor() {

        super(
            "Respiración consciente",
            4,
            15
        );
    }


    ejecutar() {

        return "Inhala lentamente, mantén la respiración y después exhala de manera tranquila.";
    }


    obtenerResultado() {

        return "Has completado un ejercicio de respiración consciente.";
    }
}




/* =====================================================
   CLASE HIJA 3
   ===================================================== */

class EscaneoCorporal
    extends ActividadMindfulness {

    constructor() {

        super(
            "Escaneo corporal",
            5,
            20
        );
    }


    ejecutar() {

        return "Presta atención a las diferentes partes de tu cuerpo y reconoce cómo te sientes.";
    }


    obtenerResultado() {

        return "Has completado un escaneo corporal.";
    }
}




/* =====================================================
   FUNCIÓN PARA CREAR ACTIVIDADES
   ===================================================== */

function crearActividad(tipo) {

    if (tipo === "meditacion") {

        return new MeditacionGuiada();

    } else if (tipo === "respiracion") {

        return new RespiracionConsciente();

    } else if (tipo === "escaneo") {

        return new EscaneoCorporal();

    } else {

        return null;
    }
}




/* =====================================================
   MÓDULO 4: SISTEMA / GAME LOOP
   ===================================================== */

class SistemaMindfulness {

    #actividad;
    #rondaActual;
    #rondasTotales;
    #puntaje;
    #sesionActiva;


    constructor(
        actividad,
        rondas = 3
    ) {

        this.#actividad =
            actividad;

        this.#rondaActual =
            0;

        this.#rondasTotales =
            rondas;

        this.#puntaje =
            0;

        this.#sesionActiva =
            false;
    }


    get actividad() {

        return this.#actividad;
    }


    get rondaActual() {

        return this.#rondaActual;
    }


    get rondasTotales() {

        return this.#rondasTotales;
    }


    get puntaje() {

        return this.#puntaje;
    }


    get sesionActiva() {

        return this.#sesionActiva;
    }


    iniciar() {

        this.#rondaActual =
            0;

        this.#puntaje =
            0;

        this.#sesionActiva =
            true;

        this.buclePrincipal();
    }


    /*
       GAME LOOP
    */

    buclePrincipal() {

        if (!this.#sesionActiva) {

            return;
        }


        if (
            this.#rondaActual >=
            this.#rondasTotales
        ) {

            this.finalizar();

            return;
        }


        this.#rondaActual++;


        this.#puntaje +=
            this.#actividad.puntos;


        /*
           POLIMORFISMO
        */

        const mensaje =
            this.#actividad.ejecutar();


        mostrarRonda(
            this.#rondaActual,
            this.#rondasTotales,
            mensaje,
            this.#puntaje
        );


        setTimeout(
            () => {

                this.buclePrincipal();

            },
            3000
        );
    }


    finalizar() {

        this.#sesionActiva =
            false;


        mostrarResultadoFinal(
            this.#actividad,
            this.#rondaActual,
            this.#puntaje
        );
    }
}




/* =====================================================
   ELEMENTOS DEL DOM PARA EL SISTEMA
   ===================================================== */

/*
   IMPORTANTE:

   El sistema NO crea ninguna sección.

   Solo busca:
   id="sistemaMindfulness"

   Por eso solamente funciona
   en meditacion.html.
*/

function obtenerContenedorSistema() {

    return document.getElementById(
        "sistemaMindfulness"
    );
}




/* =====================================================
   CREAR MENÚ DEL GAME LOOP
   ===================================================== */

function crearMenuMindfulness() {

    const contenedor =
        obtenerContenedorSistema();


    /*
       Si no existe el contenedor,
       no hacemos absolutamente nada.
    */

    if (!contenedor) {

        return;
    }


    contenedor.innerHTML = `

        <div class="text-center">

            <h2>
                Sesión interactiva de Mindfulness
            </h2>


            <p>
                Selecciona una actividad para comenzar
                tu práctica.
            </p>


            <div class="mb-4">

                <label
                    for="seleccionActividad"
                    class="form-label">

                    Elige una actividad:

                </label>


                <select
                    id="seleccionActividad"
                    class="form-select">


                    <option value="">

                        Selecciona una opción

                    </option>


                    <option value="meditacion">

                        Meditación guiada

                    </option>


                    <option value="respiracion">

                        Respiración consciente

                    </option>


                    <option value="escaneo">

                        Escaneo corporal

                    </option>


                </select>

            </div>


            <button
                id="botonIniciarSistema"
                type="button"
                class="btn btn-primary btn-lg">

                Iniciar sesión

            </button>


            <div
                id="estadoSistema"
                class="mt-4"
                role="status"
                aria-live="polite">

            </div>

        </div>
    `;


    const boton =
        document.getElementById(
            "botonIniciarSistema"
        );


    if (boton) {

        boton.addEventListener(
            "click",
            iniciarSistemaDesdeMenu
        );
    }
}




/* =====================================================
   INICIAR SISTEMA DESDE EL MENÚ
   ===================================================== */

function iniciarSistemaDesdeMenu() {

    const seleccion =
        document.getElementById(
            "seleccionActividad"
        );


    const estado =
        document.getElementById(
            "estadoSistema"
        );


    if (
        !seleccion ||
        !estado
    ) {

        return;
    }


    if (!seleccion.value) {

        estado.textContent =
            "Selecciona una actividad antes de comenzar.";

        return;
    }


    const actividad =
        crearActividad(
            seleccion.value
        );


    if (!actividad) {

        estado.textContent =
            "No se pudo crear la actividad.";

        return;
    }


    const sistema =
        new SistemaMindfulness(
            actividad,
            3
        );


    window.sistemaMindfulness =
        sistema;


    estado.textContent =
        "La sesión está comenzando...";


    sistema.iniciar();
}




/* =====================================================
   MOSTRAR CADA RONDA
   ===================================================== */

function mostrarRonda(
    ronda,
    total,
    mensaje,
    puntos
) {

    const estado =
        document.getElementById(
            "estadoSistema"
        );


    if (!estado) {

        return;
    }


    estado.innerHTML = `

        <div class="mt-4">

            <h4>
                Ronda ${ronda} de ${total}
            </h4>


            <p>
                ${mensaje}
            </p>


            <p>

                <strong>
                    Puntos acumulados:
                </strong>

                ${puntos}

            </p>

        </div>
    `;
}




/* =====================================================
   RESULTADO FINAL
   ===================================================== */

function mostrarResultadoFinal(
    actividad,
    rondas,
    puntaje
) {

    const estado =
        document.getElementById(
            "estadoSistema"
        );


    if (!estado) {

        return;
    }


    let mensajeFinal = "";


    if (puntaje >= 45) {

        mensajeFinal =
            "¡Excelente! Completaste tu sesión de mindfulness.";

    } else if (puntaje >= 30) {

        mensajeFinal =
            "¡Muy bien! Completaste la sesión. Sigue practicando.";

    } else {

        mensajeFinal =
            "Sesión completada. Puedes continuar practicando para fortalecer tus hábitos de bienestar.";
    }


    estado.innerHTML = `

        <div class="mt-4">

            <h3>
                Resultado final
            </h3>


            <p>

                <strong>
                    Actividad:
                </strong>

                ${actividad.nombre}

            </p>


            <p>

                <strong>
                    Rondas completadas:
                </strong>

                ${rondas}

            </p>


            <p>

                <strong>
                    Puntaje obtenido:
                </strong>

                ${puntaje}

            </p>


            <p>

                ${mensajeFinal}

            </p>


            <button
                type="button"
                id="reiniciarSistema"
                class="btn btn-secondary">

                Nueva sesión

            </button>

        </div>
    `;


    const botonReiniciar =
        document.getElementById(
            "reiniciarSistema"
        );


    if (botonReiniciar) {

        botonReiniciar.addEventListener(
            "click",
            crearMenuMindfulness
        );
    }
}




/* =====================================================
   INICIAR EL MENÚ CUANDO CARGA LA PÁGINA
   ===================================================== */

/*
   ESTA ES LA PARTE IMPORTANTE.

   El menú solamente se crea si encuentra
   #sistemaMindfulness.

   Como ese elemento está únicamente en
   meditacion.html, el sistema solo aparece ahí.
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            document.getElementById(
                "sistemaMindfulness"
            )
        ) {

            crearMenuMindfulness();
        }

    }
);




/* =====================================================
   MÓDULO 5: EJERCICIO DE RESPIRACIÓN
   ===================================================== */

const botonRespiracion =
    document.getElementById(
        "botonRespiracion"
    );


const instruccionRespiracion =
    document.getElementById(
        "instruccionRespiracion"
    );


if (
    botonRespiracion &&
    instruccionRespiracion
) {

    botonRespiracion.addEventListener(
        "click",
        iniciarRespiracion
    );
}


function iniciarRespiracion() {

    let paso = 1;


    botonRespiracion.disabled =
        true;


    instruccionRespiracion.textContent =
        "Inhala lentamente durante 4 segundos.";


    setTimeout(
        function () {

            paso =
                paso + 1;


            instruccionRespiracion.textContent =
                "Mantén la respiración durante 4 segundos.";

        },
        4000
    );


    setTimeout(
        function () {

            paso =
                paso + 1;


            instruccionRespiracion.textContent =
                "Exhala lentamente durante 4 segundos.";

        },
        8000
    );


    setTimeout(
        function () {

            paso =
                paso + 1;


            instruccionRespiracion.textContent =
                "Has completado la pausa. Tómate un momento antes de continuar.";


            botonRespiracion.disabled =
                false;

        },
        12000
    );
}




/* =====================================================
   MÓDULO 6: FORMULARIO DE HÁBITOS
   ===================================================== */

const formularioHabitos =
    document.getElementById(
        "formularioHabitos"
    );


const resultadoHabitos =
    document.getElementById(
        "resultadoHabitos"
    );


if (formularioHabitos) {

    formularioHabitos.addEventListener(
        "submit",
        calcularResultado
    );
}


function calcularResultado(evento) {

    evento.preventDefault();


    let puntaje = 0;


    const frecuencia =
        Number(
            document.getElementById(
                "frecuenciaEstres"
            ).value
        );


    const sueno =
        Number(
            document.getElementById(
                "sueno"
            ).value
        );


    const pausas =
        Number(
            document.getElementById(
                "pausas"
            ).value
        );


    const relajacion =
        Number(
            document.getElementById(
                "relajacion"
            ).value
        );


    /*
       Validación.
    */

    if (
        !Number.isFinite(frecuencia) ||
        !Number.isFinite(sueno) ||
        !Number.isFinite(pausas) ||
        !Number.isFinite(relajacion)
    ) {

        if (resultadoHabitos) {

            resultadoHabitos.textContent =
                "Por favor completa correctamente todos los campos.";

            resultadoHabitos.style.display =
                "block";
        }

        return;
    }


    /*
       SUMA DE LOS VALORES.
    */

    puntaje =
        frecuencia +
        sueno +
        pausas +
        relajacion;


    let mensaje = "";


    if (puntaje <= 3) {

        mensaje =
            "Tus respuestas muestran hábitos que pueden favorecer el bienestar. Continúa cuidando tu descanso, organización y momentos de pausa.";

    } else if (puntaje <= 6) {

        mensaje =
            "Puedes mejorar algunos hábitos. Intenta incorporar pausas durante el estudio, cuidar tu descanso y dedicar algunos minutos a la relajación.";

    } else {

        mensaje =
            "Tus respuestas muestran varios factores relacionados con el estrés. Considera incorporar estrategias de bienestar y buscar apoyo adecuado si el estrés afecta tu vida diaria.";
    }


    if (resultadoHabitos) {

        resultadoHabitos.innerHTML =
            "<strong>Resultado:</strong><br>" +
            mensaje +
            "<br><br>Puntaje obtenido: " +
            puntaje;


        resultadoHabitos.style.display =
            "block";
    }
}




/* =====================================================
   MÓDULO 7: ESTADO EMOCIONAL
   ===================================================== */

const botonesEstado =
    document.querySelectorAll(
        ".estado-btn"
    );


const resultadoEstado =
    document.getElementById(
        "resultadoEstado"
    );


botonesEstado.forEach(
    function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const estado =
                    boton.getAttribute(
                        "data-estado"
                    );


                let mensaje = "";


                if (
                    estado ===
                    "tranquilo"
                ) {

                    mensaje =
                        "¡Qué bien! Continúa disfrutando el momento y agradece algo positivo de tu día.";

                } else if (
                    estado ===
                    "cansado"
                ) {

                    mensaje =
                        "Tómate una pausa, toma agua y descansa unos minutos antes de continuar.";

                } else if (
                    estado ===
                    "estresado"
                ) {

                    mensaje =
                        "Respira lentamente, organiza tus pendientes y realiza una pausa consciente.";

                } else {

                    mensaje =
                        "No tienes que afrontar todo a solas. Habla con alguien de confianza y date tiempo para descansar.";
                }


                if (resultadoEstado) {

                    resultadoEstado.textContent =
                        mensaje;

                    resultadoEstado.style.display =
                        "block";
                }

            }
        );

    }
);




/* =====================================================
   MÓDULO 8: IMAGEN INTERACTIVA DEL INDEX
   ===================================================== */

const imagenMindfulness =
    document.getElementById(
        "imagenMindfulness"
    );


if (imagenMindfulness) {

    const imagenes = [

        "img/mindfulness.jpg",

        "img/relajacion.jpg",

        "img/respiracion.jpg",

        "img/presente.jpg"

    ];


    let posicionImagen = 0;


    setInterval(
        function () {

            posicionImagen++;


            if (
                posicionImagen ===
                imagenes.length
            ) {

                posicionImagen = 0;
            }


            imagenMindfulness.src =
                imagenes[
                    posicionImagen
                ];

        },
        3000
    );
}




/* =====================================================
   MÓDULO 9: PUNTOS INTERACTIVOS DE MINDFULNESS
   ===================================================== */

function mostrarDescripcion(numero) {

    /*
       Ocultamos todas las descripciones.
    */

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const descripcion =
            document.getElementById(
                "descripcion" + i
            );


        if (descripcion) {

            descripcion.style.display =
                "none";
        }
    }


    /*
       Mostramos la descripción seleccionada.
    */

    const descripcionSeleccionada =
        document.getElementById(
            "descripcion" + numero
        );


    if (descripcionSeleccionada) {

        descripcionSeleccionada.style.display =
            "block";
    }
}




/* =====================================================
   MÓDULO 10: CAUSAS DEL ESTRÉS
   ===================================================== */

const botonesCausa =
    document.querySelectorAll(
        ".causa-btn"
    );


const consejoCausa =
    document.getElementById(
        "consejoCausa"
    );


botonesCausa.forEach(
    function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const causa =
                    boton.getAttribute(
                        "data-causa"
                    );


                let consejo = "";


                if (
                    causa ===
                    "tareas"
                ) {

                    consejo =
                        "Organiza tus tareas por prioridad y realiza una por una.";

                } else if (
                    causa ===
                    "tiempo"
                ) {

                    consejo =
                        "Haz una lista de pendientes y asigna un tiempo realista para cada actividad.";

                } else if (
                    causa ===
                    "presion"
                ) {

                    consejo =
                        "Avanza paso a paso y recuerda que equivocarte también forma parte del aprendizaje.";

                } else if (
                    causa ===
                    "descanso"
                ) {

                    consejo =
                        "Toma pausas, duerme lo suficiente y permite que tu mente descanse.";
                }


                if (consejoCausa) {

                    consejoCausa.textContent =
                        consejo;
                }

            }
        );
    }
);