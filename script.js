// script.js
const preguntas = [
    {
        pregunta: "¿Cuál es el principal objetivo de la ciberseguridad en cuanto a la integridad?",
        respuestas: ["Asegurar que la información solo esté disponible para usuarios autorizados.", "Proteger la exactitud y completitud de la información.", "Asegurar que los datos sean accesibles todo el tiempo."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué es un firewall?",
        respuestas: ["Software que protege los sistemas contra virus.", "Dispositivo que filtra el tráfico de red para proteger sistemas y redes.", "Programa que almacena contraseñas."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué implica la disponibilidad en ciberseguridad?",
        respuestas: ["Información y recursos accesibles solo para administradores.", "Información y recursos accesibles para usuarios autorizados cuando sea necesario.", "Información disponible para todos los usuarios."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué es la globalización?",
        respuestas: ["Proceso de interconexión entre economías, culturas y sociedades a nivel mundial.", "Expansión de prácticas y actitudes a escala local.", "Integración de mercados regionales únicamente."],
        respuestaCorrecta: 0 // Respuesta A
    },
    {
        pregunta: "¿Cuál de las siguientes es una característica de la globalización?",
        respuestas: ["Aislamiento económico", "Interconexión económica", "Restricción cultural"],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Cómo ha afectado la globalización a la ciberseguridad?",
        respuestas: ["Ha reducido las amenazas cibernéticas.", "Ha aumentado la interconexión digital y las amenazas cibernéticas.", "No ha tenido ningún efecto."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué implica la confidencialidad en ciberseguridad?",
        respuestas: ["Asegurar que la información esté siempre disponible.", "Asegurar que la información solo esté accesible para quienes tienen autorización.", "Modificar la información según sea necesario."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué tipo de malware cifra los archivos de la víctima y exige un rescate?",
        respuestas: ["Spyware", "Troyano", "Ransomware"],
        respuestaCorrecta: 2 // Respuesta C
    },
    {
        pregunta: "¿Qué estrategia es crucial para minimizar riesgos en ciberseguridad?",
        respuestas: ["Ignorar actualizaciones de software.", "Gestión de riesgos.", "No implementar firewalls."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Cuál de los siguientes es un ejemplo de un ciberataque notorio?",
        respuestas: ["WannaCry", "ISO 27001", "PCI-DSS"],
        respuestaCorrecta: 0 // Respuesta A
    },
    {
        pregunta: "¿Qué tecnologías están siendo utilizadas para detectar y prevenir amenazas en tiempo real?",
        respuestas: ["Inteligencia Artificial y Machine Learning", "Software antivirus básico", "Hardware obsoleto"],
        respuestaCorrecta: 0 // Respuesta A
    },
    {
        pregunta: "¿Qué normativa de la UE regula la protección de datos personales y privacidad?",
        respuestas: ["HIPAA", "GDPR", "PCI-DSS"],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Cuál es una medida clave para la prevención de ciberataques?",
        respuestas: ["Desconectar todos los sistemas de la red.", "Actualización de software.", "Ignorar las prácticas de seguridad en línea."],
        respuestaCorrecta: 1 // Respuesta B
    },
    {
        pregunta: "¿Qué tipo de malware se disfraza de software legítimo?",
        respuestas: ["Ransomware", "Virus", "Troyano"],
        respuestaCorrecta: 2 // Respuesta C
    },
    {
        pregunta: "¿Cuál es una práctica recomendada para la respuesta ante incidentes de seguridad?",
        respuestas: ["Esperar a que el problema se resuelva solo.", "Establecer protocolos claros de detección, respuesta y recuperación.", "Desconectar todos los sistemas permanentemente."],
        respuestaCorrecta: 1 // Respuesta B
    }
];

const form = document.getElementById('encuesta-form');
const resultadoContainer = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    let respuestasCorrectas = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];
        const respuestaSeleccionada = obtenerRespuestaSeleccionada(`pregunta${i + 1}`);

        if (respuestaSeleccionada === pregunta.respuestaCorrecta.toString()) {
            respuestasCorrectas++;
        }
    }

    mostrarResultado(respuestasCorrectas);
});

function obtenerRespuestaSeleccionada(nombrePregunta) {
    const opciones = document.getElementsByName(nombrePregunta);
    
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    
    return undefined;
}

function mostrarResultado(respuestasCorrectas) {
    let mensaje = '';
    if (respuestasCorrectas === preguntas.length) {
        mensaje = "¡Excelente! Parece que tienes buenos conocimientos en ciberseguridad.";
    } else if (respuestasCorrectas >= preguntas.length / 2) {
        mensaje = "Bien hecho. Seguramente estás aprendiendo mucho sobre ciberseguridad.";
    } else {
        mensaje = "Te recomendamos seguir aprendiendo sobre ciberseguridad para protegerte mejor.";
    }

    resultadoContainer.innerHTML = `<p>${mensaje}</p>`;
}
