import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../productos';
import { ProductosService } from '../productos.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto;
  productos;
  prods: Producto[];
  form;
  comentarios;
  constructor(private route: ActivatedRoute, private productosServ: ProductosService,
              private formulario: FormBuilder, private router: Router) {
    this.form = this.formulario.group({
      id: '',
      name: '',
      mail: '',
      comentario: '',
      calificacion: ['', [Validators.required]]
    });
    
  }

  get myForm() {
    return this.form.get('calificacion');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let prod = Number(params.get("productoID"))-1;
      console.log("prod: " + prod);
      this.productosServ.cargarProductos().subscribe((productos: Producto[]) => {
        this.producto = productos[prod];
        console.log(this.producto);
      })

      this.productosServ.cargarComentarios(Number(params.get("productoID"))).subscribe((productos: Producto[]) => {
        this.comentarios = productos;
        console.log(this.comentarios);
      })

    });
  }

  onSubmit(com) {
    this.route.paramMap.subscribe(params => {
      com.id = Number(params.get("productoID"));
      console.log(com.name);

      if (com.name != '' && com.mail != '' && com.comentario != '') {
        this.productosServ.comentar(com).subscribe((productos: Producto[]) => {
          console.log(".subscribe->this.prods: " + JSON.stringify(this.prods));
        })
      }

      this.productosServ.calificar(com).subscribe((productos: Producto[]) => {
        console.log(".subscribe->this.prods: " + JSON.stringify(this.prods));
      })
    });
    window.alert('Comentario/Calificación agregad@!');
    this.router.navigate(['productos']);
  }




}
