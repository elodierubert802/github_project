import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" formControlName="name">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
})
export class MyFormComponent {
  onSubmit() {
    // your code here
  }
}
