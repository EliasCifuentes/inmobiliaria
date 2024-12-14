// Ventas

const propiedades_ventas = [
    {
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        nombre: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 4567',
        habitaciones: 4,
        baños: 4,
        costo: "5.000",
        smoke: false,
        pets: false
    }
    ,
    {
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: "1.200",
        smoke: true,
        pets: true
    }
    ,
    {
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        nombre: 'Penthouse de lujo con terraza panorámica',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue,Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "4.500",
        smoke: false,
        pets: true,
    }
    ,
    {
        src: 'assets/img/comprar-casas-nos-estados-unidos-otimo-investimento.jpg',
        nombre: 'Casa ampliada cerca de disney',
        descripcion: 'casas amplias, desde 5 recámaras, con atractivos precios de primera lista (precios planos). Todas las residencias cuentan con alberca privada',
        ubicacion: '436 WINDSOR CAY RESORT',
        habitaciones: 5,
        baños: 5,
        costo: "7.500",
        smoke: false,
        pets: false,
    }

]


// Alquiler

const propiedades_alquiler = [
    {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        nombre: 'Apartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: "2.000",
        smoke: false,
        pets: true
    }
    ,
    {
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3 ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        nombre: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "2.500",
        smoke: true,
        pets: true
    }
    ,
    {
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        nombre: 'Condominio moderno en zona residencial',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo:"2.200",
        smoke: false,
        pets: false,
    }
,
    {
        src: 'assets/img/rl-131479515__0__300.jpg',
        nombre: 'Storey Lake – Casas en venta',
        descripcion: 'Además de casas adosadas (adosadas), también ofrece unidades residenciales (viviendas unifamiliares). El condominio ofrece casas en venta en Orlando de 4, 5 y 6 recámaras.',
        ubicacion: ' 293 New Street, Orlando',
        habitaciones: 2,
        baños: 2,
        costo:"2.300",
        smoke: true,
        pets: false
    }
]

// Logica

function mostrarPropiedades(arrayPropiedades, contenedorId) { // Funcion que recibira un array y un ID

    let contenido = "" 
    
    for (let contenidos of arrayPropiedades) {
        
        
        let fumar = contenidos.smoke 
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' 
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar </p>';

        let mascota = contenidos.pets 
            ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>' 
            : '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas </p>';

        contenido += `
        <div class="anuncio">
            <div class="card">
                <img src="${contenidos.src}" alt="Imagen de la propiedad" class="card-img-top"/>
            </div>
            <div class="info">
                <h5 class="card-title"> ${contenidos.nombre} </h5>
                <p class="card-text">${contenidos.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${contenidos.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${contenidos.habitaciones} |
                    <i class="fas fa-bath"></i> ${contenidos.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${contenidos.costo}</p>
                ${fumar} 
                ${mascota}                     
            </div>
        </div>`;
    }

    // Insertar contenido en el contenedor correspondiente
let agregar = document.getElementById(contenedorId);
if(agregar)
    {
        agregar.innerHTML = contenido
    }   
}

let seleccion = document.body.id // Selecciona la ID contenida en el Body

if( seleccion === "pagina-principal")
    {
        mostrarPropiedades(propiedades_ventas.slice(0,3), 'contenedor-ventas'); // Muestra solo los array del 0 al 3
        mostrarPropiedades (propiedades_alquiler.slice(0,3), 'contenedor-alquileres')
    }
    else if (seleccion === "pagina-ventas")
    {
        mostrarPropiedades(propiedades_ventas,  'contenedor-ventas') 
    }
    else if(seleccion === "pagina-alquileres")
    {
        mostrarPropiedades(propiedades_alquiler, 'contenedor-alquileres'); 
    }





