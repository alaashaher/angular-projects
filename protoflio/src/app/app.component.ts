import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    private router: Router
  ) {
    // this.CheckRouting('');
  }
  // CheckRouting(RouterLocation) {
  //   if (RouterLocation === '' || RouterLocation === '#/') {
  //     this.router.navigate(['HeaderComponent']);
  //   } else {
  //     this.router.navigate([RouterLocation.replace('#/', '')]);
  //     this.router.navigate(['HeaderComponent']);
  //   }
  // }
}
