import { propiedades_venta, propiedades_alquiler } from './data/propiedades.js';

// Metodo para destructurar cada propiedad
const crearPropiedad = (propiedad) => {
    const { nombre, src, descripcion, ubicacion, habitaciones, banios, costo, smoke, pets } = propiedad;
    
    // OPERADORES TERNARIOS
    // Permitir Fumar o no
    const allowSmoke = smoke ? 'Permitido fumar' : 'No se permite fumar';
    const iconSmoke = smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';
    
    const claseSmoke = smoke ? 'text-success' : 'text-danger';
    
    // Permitir Mascotas o no
    const allowPets = pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
    const iconPets = pets ? 'fas fa-paw' : 'fas fa-ban';
    const clasePets = pets ? 'text-success' : 'text-danger';

    // Si hay mas de una Habitacion o Baño, mostrar en plural
    const habitacionText = habitaciones > 1 ? 'Habitaciones' : 'Habitación';
    const banioText = banios > 1 ? 'Baños' : 'Baño';

    // Costo en UF o CLP
    const costoText = costo >= 10000 ? 'CLP' : 'UF';



    return `
    <div class="col-md-4 mb-4">
        <div class="card h-100">
            <img src="${src}" class="card-img-top" alt="${nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                    ${nombre}
                </h5>
                <p class="card-text flex-grow-1">
                    ${descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${habitaciones} ${habitacionText} |
                    <i class="fas fa-bath"></i> ${banios} ${banioText}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${costo} ${costoText}
                </p>
                <p class="${claseSmoke}">
                    <i class="${iconSmoke}"></i> ${allowSmoke}
                </p>
                <p class="${clasePets}">
                    <i class="${iconPets}"></i> ${allowPets}
                </p>
            </div>
        </div>
    </div>
    `
}

const mostrarPropiedades = (propiedades, containerId, max = 3) => {
    const container = document.getElementById(containerId);

    // Condicional para evitar errores si el contenedor no existe
    if (!container) {
        return; 
    }

    const propiedadesMax = propiedades.slice(0, max);

    const html = propiedadesMax.map(crearPropiedad).join('');
    container.innerHTML = html;
}

// Invocar metodos
mostrarPropiedades(propiedades_venta, 'ventasContainer');
mostrarPropiedades(propiedades_alquiler, 'alquilerContainer');

// Invocar metodos en las paginas secundarias
mostrarPropiedades(propiedades_venta, 'ventasContainerSecundario', propiedades_venta.length);
mostrarPropiedades(propiedades_alquiler, 'alquilerContainerSecundario', propiedades_alquiler.length);