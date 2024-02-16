import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})

export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
  }
  submitted = false;

  //takes an instance of TutorialService, used for managing tutorial-related operations
  constructor( private tutorialService: TutorialService) { }

  //lifecycle hook that is used for initialization tasks
  ngOnInit(): void {
    
  };

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    }
    /* In Angular, services often use observables to handle asynchronous operations, especially when dealing with HTTP requests. 
       The subscribe method is a standard method for working with observables in Angular services. */
    this.tutorialService.create(data)
    /* The subscribe method is part of the Observable pattern provided by RxJS, 
       which is commonly used for handling asynchronous operations, such as HTTP requests. */
      .subscribe({
        //next callback is called when a new value is emitted by the observable
        next: (res) => {
          console.log(res);
          //set submitted to true one we receive confirmation back from HTTP request that it was successful
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  };

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
    }
  }

}
