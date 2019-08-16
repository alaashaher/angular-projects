import { HeaderComponent } from './header.component';
import { Routes } from '@angular/router';

export const HeaderRoutes: Routes = [{
    path: '',
    component: HeaderComponent,
    data: {
        heading: 'HeaderComponent'
    }
}
];
