import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {
  form;
  items = [];
  mensaje;

  constructor(private carrito: CarritoService, private formulario: FormBuilder, private router: Router) {
    this.form = this.formulario.group({
      nombrecito: '',
      email: ''
    });
  }

  LimpiarCarrito() {
    this.items = this.carrito.LimpiarCarrito();
    localStorage.clear();
  }

  ngOnInit(): void {
    this.items = this.carrito.ListarCarrito();
    console.log(this.items);
  }

  onSubmit(dato) {
    console.log(dato);
    this.mensaje = this.carrito.GuardarDatos(dato);
    this.mensaje.subscribe(datos=>{
      console.log(datos.mensaje);
      window.alert("Gracias por su compra!");
      this.router.navigate(['productos']);
    });

  }

}
