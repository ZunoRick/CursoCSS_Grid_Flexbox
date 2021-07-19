document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
        .then( respuesta => {
            return respuesta.json();
        })
        .then( datos => {
            let html = '';
            datos.portafolio.forEach(element => {
                //Crear el template
                html += `
                    <div class="elemento">
                        <img src="img/${element.id}.jpg">
                        <div class="contenido">
                            <h3>${element.nombre}</h3>
                            <p>${element.desc}</p>
                        </div>
                    </div>
                `;
            });

            //Después de crear el template inyectar a l HTML
            document.querySelector('#listado').innerHTML = html;
        });
}