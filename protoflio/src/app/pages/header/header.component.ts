import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    info = {
        name: 'Alaa Shaher',
        job: 'Front-end Web Develper',
        about: 'I\'am Front-end Develper, have good exprince, keeping learning more tool'
    };
    public links = ['Home', 'Education', 'Experience', 'Skills', 'Contact'];
    constructor(
        private router: Router
    ) { }
    gotoLinkhome() {
        this.router.navigate(['./']);
    }
    gotoLinkExperience() {
        this.router.navigate(['WorkExperienceComponent']);
    }
    gotoLinkSkills() {
        this.router.navigate(['SoftSkillsComponent']);
    }
    gotoLinkContact() {
        this.router.navigate(['FooterComponent']);
    }
}
