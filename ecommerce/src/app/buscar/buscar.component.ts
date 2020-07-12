import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Producto } from '../productos';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  prods: Producto[];
  pr;
  form;
  productos;
  constructor(private formulario: FormBuilder, private productosServ: ProductosService) {
    this.form = this.formulario.group({
      search:''
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(busq) {
    console.log("busq: "+busq.search);
    this.pr = this.productosServ.getProducto(busq.search);
    this.productosServ.getProducto(busq.search).subscribe((productos: Producto[]) => {
      this.prods = productos;
      console.log(".subscribe->this.prods: " + JSON.stringify(this.prods));
      this.productos = this.productosServ.listarBusqueda(this.prods);
    })
  }

}
