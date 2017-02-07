import { Component } from '@angular/core';

@Component({
  selector: 'human',
  moduleID: module.id,
  templateUrl: 'human.html'
})

export class HumanComponent {
  name: string;
  constructor(){
    this.name = "Create a human with angular 2!"
  }
}
