import './style.css'
import { getData } from './js/getData.js';
import { showNav } from './js/showNav.js';
import { connectedUser } from './js/connectedUser';
import { cerrarSesion } from './js/cerrarSesion';

// Mensaje de bienvenida con nombre del usuario
connectedUser()

// Cerrar sesión
cerrarSesion()

// Función para mostrar el nav
showNav()

// Función para mostrar productos
getData()

