import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Carrito } from './compartidos/carrito/carrito';
import { Fav } from './compartidos/fav/fav';
import { Ofertas } from './paginas/ofertas/ofertas';
import path from 'path';
import { Iniciosesion } from './auth/iniciosesion/iniciosesion';
import { Registro } from './auth/registro/registro';
import { Contacto } from './paginas/contacto/contacto';
import { Productos } from './paginas/productos/productos';

export const routes: Routes = [

    {path: "", redirectTo:"Inicio",pathMatch:"full"},
    {path: "Inicio", component: Inicio},
    {path: "Carrito",component: Carrito},
    {path: "Fav",component: Fav},
    {path: "Ofertas", component: Ofertas},
    {path:"Iniciosesion", component: Iniciosesion},
    {path: "Registro", component: Registro},
    {path: "Contacto", component: Contacto},
    {path: "Productos", component: Productos}
];
