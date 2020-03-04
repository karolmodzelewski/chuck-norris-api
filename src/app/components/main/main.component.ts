import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    randomJoke: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    getRandomJoke() {
        this.http.get<any>("https://api.chucknorris.io/jokes/random").subscribe(data => {
            this.randomJoke = data.value;
            return this.randomJoke;
        });
    }

}
