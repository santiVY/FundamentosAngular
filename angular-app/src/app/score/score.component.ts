import { Component, Input, OnInit } from '@angular/core'
import { element } from 'protractor';

@Component({
    selector: 'score-app',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})

export class ScoreComponent  implements OnInit{

    @Input() score: number;
    public scoreDraw: string;

    ngOnInit(){
        console.log('Score ' + this.score)
        this.showScore()
    }

    public showScore(): string{
        let draw: string = '';
        [1,2,3,4,5].map(el => el <= this.score ? draw += '*' : draw += '-');
        return this.scoreDraw = draw;

        // for(let i = 1; i <= 5 ; i++){
        //    if(i <= this.score){
        //         draw = draw + '*'; 
        //    }else {
        //         draw = draw + '-'
        //    }   
        // }
        // return this.scoreDraw = draw;
    }
}
