import { Component } from '@angular/core';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
    WorkExrerience = {
        work1: 'Front-end Web Develper',
        data1 : 'Jun 2016 - Now',
        work2: 'Design Assistant',
        data2 : 'Mar 2015 - Dec 2015',
    };

    Education = {
        Education1: 'Department of Information Management',
        data1 : 'Set 2010 - Jun 2014',
        Education2: 'Department of Data Processing',
        data2 : 'Set 2007 - Jun 2010',
    };

}
