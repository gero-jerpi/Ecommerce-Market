import './style.css'
import { getData } from './js/getData.js';
import { showNav } from './js/showNav.js';
import { connectedUser } from './js/connectedUser';


// Mensaje de bienvenida con nombre del usuario
connectedUser()

// Función para mostrar el nav
showNav()

// Función para mostrar productos
getData()

