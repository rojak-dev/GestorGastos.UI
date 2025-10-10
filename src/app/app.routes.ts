import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearTipoCuentaComponent } from './TiposCuenta/crear-tipo-cuenta/crear-tipo-cuenta.component';
import { IndiceTiposCuentasComponent } from './TiposCuenta/indice-tipos-cuentas/indice-tipos-cuentas.component';
import { EditarTipoCuentaComponent } from './TiposCuenta/editar-tipo-cuenta/editar-tipo-cuenta.component';
import { NoEncontradoComponent } from './compartidos/componentes/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'tipoCuenta', component: IndiceTiposCuentasComponent},
    {path: 'tipoCuenta/crear', component: CrearTipoCuentaComponent},
    //para poder leer esta variable de ruta hay que configurar el proveedor withComponentInputBindign() en el proveedor de ruta
    {path: 'tipoCuenta/editar/:id', component: EditarTipoCuentaComponent},
    //wildCard para atrapar rutas no encontradas
    {path: '**', component: NoEncontradoComponent}
];
