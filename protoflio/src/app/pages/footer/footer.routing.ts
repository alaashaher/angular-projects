import { FooterComponent } from './footer.component';
import { Routes } from '@angular/router';

export const FooterRoutes: Routes = [{
    path: '',
    component: FooterComponent,
    data: {
        heading: 'FooterComponent'
    }
}
];
