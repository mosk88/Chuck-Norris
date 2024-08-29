import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../chuck.service';
import { ChuckInterface } from '../chuck.interface';


@Component({
  selector: 'app-chuck',
  standalone: true,
  imports: [],
  templateUrl: './chuck.component.html',
  styleUrl: './chuck.component.css'
})
export class ChuckComponent implements OnInit {

  chuck: ChuckInterface | undefined;
  displayText: string = '';

  constructor(private chuckService: ChuckService) { 

  }

  ngOnInit(): void {
    this.chuckService.getChuck().subscribe(oneChuck => {
      this.chuck = oneChuck;
      this.displayTextLetterByLetter(this.chuck.value)
    }
  
);
  }
  displayTextLetterByLetter(text: string): void {
    this.displayText = ''; // Clear any previous text
    const letters = text.split('');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        this.displayText += letter;
      }, 100 * index); // Adjust the interval as needed
    });
  }
}
