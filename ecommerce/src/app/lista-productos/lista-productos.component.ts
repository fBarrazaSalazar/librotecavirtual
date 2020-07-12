import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos';
import { CarritoService } from '../carrito.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private carrito: CarritoService, private productosServ: ProductosService) { }

  ngOnInit(): void {
    this.productosServ.cargarProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
      console.log(this.productos);
    })
  }

  adicionarCarrito(producto) {
    this.carrito.adicionarCarrito(producto);
    window.alert(producto.titulo + ' ha sido agregado al carrito');
    console.log("Producto agregado - ID:" + producto.id_producto);
  }

}
