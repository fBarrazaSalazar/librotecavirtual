import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = [];

  url = "http://localhost/services/"

  constructor(private http: HttpClient) { }

  getProducto(prod_id): Observable<Producto[]> {
    console.log("productos.service.ts: " + prod_id);
    return this.http.post<Producto[]>(`${this.url}buscar.php`, JSON.stringify(prod_id));
  }

  cargarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}cargar_catalogo.php`);
  }

  listarBusqueda(prod) {
    return prod;
  }

  comentar(comform) {
    return this.http.post<Producto[]>(`${this.url}comentar.php`, JSON.stringify(comform));
  }

  calificar(comform) {
    return this.http.post<Producto[]>(`${this.url}calificar.php`, JSON.stringify(comform));
  }

  cargarComentarios(prod_id): Observable<Producto[]> {
    return this.http.post<Producto[]>(`${this.url}cargar_comentarios.php`, JSON.stringify(prod_id));
  }
}
