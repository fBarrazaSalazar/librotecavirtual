import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  items = [];

  url="http://localhost/services/"

  constructor(private http: HttpClient) { }

  adicionarCarrito(producto) {
    let encontrado = false;
    
      this.items.forEach((elemento) => {
        if (elemento.id_producto == producto.id_producto) {
          encontrado = true;
          elemento.cantidad += 1;
        }
      });
    

    if (!encontrado) {
      this.items.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(this.items));
  }

  LimpiarCarrito() {
    localStorage.clear();
    this.items = [];
    return this.items;
  }

  ListarCarrito() {
    this.items = JSON.parse(localStorage.getItem("carrito"));
    return this.items;
  }

  GuardarDatos(datos) {
    let dato = [this.items, datos];
    localStorage.clear();
    console.log(dato);
    return this.http.post(`${this.url}guardar.php`, JSON.stringify(dato));
  }

}
