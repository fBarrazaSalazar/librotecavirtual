import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MejoresComponent } from './mejores/mejores.component';




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'carrito', component: ListaCarritoComponent },
  { path: 'mejores', component: MejoresComponent },
  { path: 'productos/:productoID', component: DetalleProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
