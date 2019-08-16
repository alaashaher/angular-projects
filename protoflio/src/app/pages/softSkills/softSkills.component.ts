import { Component } from '@angular/core';

@Component({
    selector: 'app-soft-skills',
    templateUrl: './softSkills.component.html',
    styleUrls: ['./softSkills.component.scss']
})
export class SoftSkillsComponent {
    skills = {
        skill1: 'Photoshop',
        skill2: 'VS Code',
        skill3: 'Atom',
        skill4: 'Commind Line',
    };
}
