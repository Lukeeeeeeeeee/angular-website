import { QuestionService } from './services/question.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [QuestionService]
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
