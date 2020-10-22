import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experiences.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<IExperience>;

  //estamos haciendo una inyeccion de dependencie del servicio ExperienceService
  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit(): void {
    this.getExperiencesTop5();
  }

  private getExperiencesTop5(): void {
    this.experienceService.getExperienceTop5().subscribe(response => {
      this.experiences = response.top5;
    });
  }

}
