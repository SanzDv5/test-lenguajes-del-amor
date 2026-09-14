const preguntasData = [
    {
        id: 1,
        opciones: [
            { texto: "Me gusta recibir notas de afirmación", valor: "A" },
            { texto: "Me gusta que me abracen", valor: "E" }
        ]
    },
    {
        id: 2,
        opciones: [
            { texto: "Me gusta pasar tiempo a solas con una persona especial para mi.", valor: "B" },
            { texto: "Me siento amado cuando alguien me da ayuda práctica.", valor: "D" }
        ]
    },
    {
        id: 3,
        opciones: [
            { texto: "Me gusta cuando la gente me hace regalos.", valor: "C" },
            { texto: "Me gustan las visitas sin prisas con amigos y seres queridos.", valor: "B" }
        ]
    },
    {
        id: 4,
        opciones: [
            { texto: "Me siento querido cuando la gente hace cosas para ayudarme.", valor: "D" },
            { texto: "Me siento querido cuando la gente me toca.", valor: "E" }
        ]
    },
    {
        id: 5,
        opciones: [
            { texto: "Me siento querido cuando alguien que amo o admiro me rodea con sus brazos.", valor: "E" },
            { texto: "Me siento querido cuando alguien que amo me expresa su amor con un pequeño regalo.", valor: "C" }
        ]
    },
    {
        id: 6,
        opciones: [
            { texto: "Me gusta ir a lugares con amigos y seres queridos.", valor: "B" },
            { texto: "Me gusta dar un apretón de manos o chocarlas con gente especial para mi.", valor: "E" }
        ]
    },
    {
        id: 7,
        opciones: [
            { texto: "Los símbolos visibles de amor (regalos) son muy importantes para mi.", valor: "C" },
            { texto: "Me siento querido cuando la gente me da afirmación.", valor: "A" }
        ]
    },
    {
        id: 8,
        opciones: [
            { texto: "Me gusta sentarme cerca de personas cuya compañía disfruto.", valor: "E" },
            { texto: "Me gusta que la gente me diga que soy atractivo o guapo.", valor: "A" }
        ]
    },
    {
        id: 9,
        opciones: [
            { texto: "Me gusta pasar tiempo con amigos y seres queridos.", valor: "B" },
            { texto: "Me gusta recibir pequeños regalos de amigos y seres queridos.", valor: "C" }
        ]
    },
    {
        id: 10,
        opciones: [
            { texto: "Las palabras de aceptación son importantes para mí.", valor: "A" },
            { texto: "Sé que alguien me quiere cuando me ayuda.", valor: "D" }
        ]
    },
    {
        id: 11,
        opciones: [
            { texto: "Me gusta estar con amigos y seres queridos y hacer cosas a su lado.", valor: "B" },
            { texto: "Me gusta cuando me dicen palabras amables.", valor: "A" }
        ]
    },
    {
        id: 12,
        opciones: [
            { texto: "Lo que alguien hace me afecta más que lo que dice.", valor: "D" },
            { texto: "Los abrazos me hacen sentir conectado y valorado.", valor: "E" }
        ]
    },
    {
        id: 13,
        opciones: [
            { texto: "Valoro el elogio e intento evitar la crítica.", valor: "A" },
            { texto: "Varios regalos pequeños significan más para mí que un regalo grande.", valor: "C" }
        ]
    },
    {
        id: 14,
        opciones: [
            { texto: "Me siento cercano a alguien cuando hablamos o hacemos algo juntos.", valor: "B" },
            { texto: "Me siento más cercano a los amigos y seres queridos cuando me tocan a menudo.", valor: "E" }
        ]
    },
    {
        id: 15,
        opciones: [
            { texto: "Me gusta que la gente me elogie mis logros.", valor: "A" },
            { texto: "Sé que la gente me quiere cuando hacen cosas para mí que no les gustan.", valor: "D" }
        ]
    },
    {
        id: 16,
        opciones: [
            { texto: "Me gusta que cuando los amigos y seres queridos pasan a mi lado, me toquen.", valor: "E" },
            { texto: "Me gusta cuando la gente me escucha y muestra un interés genuino por lo que estoy diciendo.", valor: "B" }
        ]
    },
    {
        id: 17,
        opciones: [
            { texto: "Me siento amado cuando los amigos y seres queridos me ayudan con proyectos o trabajos.", valor: "D" },
            { texto: "A decir verdad, disfruto al recibir regalos de amigos y seres queridos.", valor: "C" }
        ]
    },
    {
        id: 18,
        opciones: [
            { texto: "Me gusta que la gente elogie mi aspecto.", valor: "A" },
            { texto: "Me siento querido cuando la gente se toma tiempo para comprender mis sentimientos.", valor: "B" }
        ]
    },
    {
        id: 19,
        opciones: [
            { texto: "Me siento seguro cuando una persona especial me toca.", valor: "E" },
            { texto: "Los actos de servicio hacen que me sienta querido.", valor: "D" }
        ]
    },
    {
        id: 20,
        opciones: [
            { texto: "Agradezco las muchas cosas que las personas especiales hacen por mí.", valor: "D" },
            { texto: "Me gusta recibir regalos que me hacen las personas especiales.", valor: "C" }
        ]
    },
    {
        id: 21,
        opciones: [
            { texto: "En realidad, me gusta el sentimiento que obtengo cuando alguien me presta su total atención.", valor: "B" },
            { texto: "Me gusta de veras lo que siento cuando alguien realiza algún acto de servicio por mí.", valor: "D" }
        ]
    },
    {
        id: 22,
        opciones: [
            { texto: "Me siento querido cuando una persona celebra mi cumpleaños con un regalo.", valor: "C" },
            { texto: "Me siento querido cuando una persona celebra mi cumpleaños con palabras significativas.", valor: "A" }
        ]
    },
    {
        id: 23,
        opciones: [
            { texto: "Sé que una persona piensa en mí cuando me hace un regalo.", valor: "C" },
            { texto: "Me siento querido cuando una persona me ayuda con mis tareas.", valor: "D" }
        ]
    },
    {
        id: 24,
        opciones: [
            { texto: "Agradezco cuando alguien escucha con paciencia y no me interrumpe.", valor: "B" },
            { texto: "Agradezco cuando alguien recuerda las fechas especiales con un regalo.", valor: "C" }
        ]
    },
    {
        id: 25,
        opciones: [
            { texto: "Me gusta saber que mis seres queridos se preocupan lo suficiente para ayudarme con mis tareas diarias.", valor: "D" },
            { texto: "Disfruto de los viajes largos con alguien que sea especial para mi.", valor: "B" }
        ]
    },
    {
        id: 26,
        opciones: [
            { texto: "Disfruto cuando beso a personas con las que me siento cerca o cuando me besan a mí.", valor: "E" },
            { texto: "Me emociona recibir un regalo hecho sin ninguna razón especial.", valor: "C" }
        ]
    },
    {
        id: 27,
        opciones: [
            { texto: "Me gusta que me digan que soy apreciado.", valor: "A" },
            { texto: "Me gusta que una persona me mire mientras hablamos.", valor: "B" }
        ]
    },
    {
        id: 28,
        opciones: [
            { texto: "Los regalos de un amigo o ser querido siempre son especiales para mí.", valor: "C" },
            { texto: "Me siento bien cuando un amigo o ser querido me toca.", valor: "E" }
        ]
    },
    {
        id: 29,
        opciones: [
            { texto: "Me siento querido cuando una persona hace con entusiasmo alguna tarea que le he pedido que haga.", valor: "D" },
            { texto: "Me siento querido cuando me dicen lo mucho que me aprecian.", valor: "A" }
        ]
    },
    {
        id: 30,
        opciones: [
            { texto: "Necesito que me toquen cada día.", valor: "E" },
            { texto: "Necesito palabras de afirmación cada día.", valor: "A" }
        ]
    }
];

const nombresLenguajes = {
    A: "Palabras de Afirmación",
    B: "Tiempo de Calidad",
    C: "Recibir Regalos",
    D: "Actos de Servicio",
    E: "Toque Físico"
};

const descripcionesLenguajes = {
    A: "Las palabras de aprecio verbales y los cumplidos son fundamentales para ti.",
    B: "El tiempo de calidad es esencial para sentirte amado y conectado.",
    C: "Los regalos son importantes para ti, no por su valor material, sino por el significado y el pensamiento detrás de ellos.",
    D: "Las acciones de servicio realizadas por tu pareja para ayudarte son una forma poderosa de expresar amor.",
    E: "El contacto físico es tu lenguaje principal. Los abrazos y las caricias comunican seguridad y amor."
};

const contenedorPreguntas = document.getElementById('preguntas-contenedor');
const form = document.getElementById('amor-form');
const seccionResultados = document.getElementById('resultados-contenedor');
const lenguajePrincipalEl = document.getElementById('lenguaje-principal');
const descripcionLenguajeEl = document.getElementById('descripcion-lenguaje');
const puntajesDetalleEl = document.getElementById('puntajes-detalle');
const btnReiniciar = document.getElementById('btn-reiniciar');

function renderizarPreguntas() {
    contenedorPreguntas.innerHTML = '';
    preguntasData.forEach((pregunta) => {
        const div = document.createElement('div');
        div.className = 'pregunta-card';
        div.dataset.pregunta = pregunta.id;
        
        const numero = document.createElement('span');
        numero.className = 'numero-pregunta';
        numero.textContent = `Pregunta ${pregunta.id}`;
        div.appendChild(numero);

        const ayuda = document.createElement('p');
        ayuda.className = 'pregunta-ayuda';
        ayuda.textContent = 'Siéntete libre de seleccionar una de las opciones, ambas o ninguna.';
        div.appendChild(ayuda);

        pregunta.opciones.forEach((opcion, i) => {
            const inputId = `p${pregunta.id}_o${i}`;
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = `pregunta${pregunta.id}`;
            input.value = opcion.valor;
            input.id = inputId;

            const label = document.createElement('label');
            label.className = 'opcion-label';
            label.setAttribute('for', inputId);

            const codigo = document.createElement('span');
            codigo.className = 'opcion-codigo';
            codigo.textContent = opcion.valor;
            codigo.setAttribute('aria-hidden', 'true');

            const contenido = document.createElement('span');
            contenido.className = 'opcion-contenido';

            const afirmacion = document.createElement('span');
            afirmacion.className = 'opcion-afirmacion';
            afirmacion.textContent = opcion.texto;

            contenido.appendChild(afirmacion);
            label.appendChild(codigo);
            label.appendChild(contenido);

            div.appendChild(input);
            div.appendChild(label);
        });

        contenedorPreguntas.appendChild(div);
    });
}

function calcularResultados(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const conteo = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    
    for (let valor of formData.values()) {
        conteo[valor]++;
    }

    let maxPuntos = 0;
    let lenguajesMaximos = [];

    for (const [letra, puntos] of Object.entries(conteo)) {
        if (puntos > maxPuntos) {
            maxPuntos = puntos;
            lenguajesMaximos = [letra];
        } else if (puntos === maxPuntos) {
            lenguajesMaximos.push(letra);
        }
    }

    mostrarResultados(conteo, lenguajesMaximos);
}

function mostrarResultados(conteo, lenguajesMaximos) {
    form.classList.add('oculto');
    document.querySelector('header').classList.add('oculto');
    seccionResultados.classList.remove('oculto');

    if (lenguajesMaximos.length === 1 && conteo[lenguajesMaximos[0]] > 0) {
        const letra = lenguajesMaximos[0];
        lenguajePrincipalEl.textContent = nombresLenguajes[letra];
        descripcionLenguajeEl.textContent = descripcionesLenguajes[letra];
    } else if (lenguajesMaximos.every((letra) => conteo[letra] === 0)) {
        lenguajePrincipalEl.textContent = 'Sin selecciones';
        descripcionLenguajeEl.textContent = 'No has seleccionado ninguna opción. Puedes repetir el cuestionario cuando quieras.';
    } else {
        const nombres = lenguajesMaximos.map(l => nombresLenguajes[l]).join(" y ");
        lenguajePrincipalEl.textContent = nombres;
        descripcionLenguajeEl.textContent = "Tienes una igualdad entre estos lenguajes. Ambos son igualmente importantes para ti.";
    }

    puntajesDetalleEl.innerHTML = '';
    for (const [letra, puntos] of Object.entries(conteo)) {
        const item = document.createElement('div');
        item.className = 'score-item';

        const nombre = document.createElement('span');
        nombre.className = 'score-name';
        nombre.textContent = nombresLenguajes[letra];

        const puntuacion = document.createElement('span');
        puntuacion.className = 'score-value';
        puntuacion.textContent = puntos;

        item.appendChild(nombre);
        item.appendChild(puntuacion);
        puntajesDetalleEl.appendChild(item);
    }
}

function reiniciarFormulario() {
    form.reset();
    seccionResultados.classList.add('oculto');
    form.classList.remove('oculto');
    document.querySelector('header').classList.remove('oculto');
    window.scrollTo(0, 0);
}

form.addEventListener('submit', calcularResultados);
btnReiniciar.addEventListener('click', reiniciarFormulario);

renderizarPreguntas();