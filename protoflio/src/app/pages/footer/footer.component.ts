import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    Contact = {
        tele: '+201024513379',
        location: 'egypt, benha',
        email: 'alaashaher12@gmail.com',
        code: 'codepen.io/alaa_shaher'
    };
}
