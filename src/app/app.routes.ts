import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearTipoCuentaComponent } from './TiposCuenta/crear-tipo-cuenta/crear-tipo-cuenta.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'crearTipoCuenta', component: CrearTipoCuentaComponent}
];
