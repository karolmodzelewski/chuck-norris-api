import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { IPun } from './../../interfaces/ipun';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    randomJoke: string;
    jokeWasTold: boolean;

    constructor(private http: HttpClient) { }

    getRandomJoke() {
        this.http.get<IPun>("https://api.chucknorris.io/jokes/random").subscribe(data => {
            this.randomJoke = data.value;
            return this.randomJoke;
        });

        this.jokeWasTold = true;
    }
}
