import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IExperience } from '../experience.model';


@Component({
    selector: 'experience-app',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

    @Input() experience: IExperience;
    @Output() expSelected: EventEmitter<number> = new EventEmitter();

    public tax: number = 0.19;

    public showDetail(): void {
        console.log("click en experience component", this.experience.id);
        this.expSelected.emit(this.experience.id);
    }

}