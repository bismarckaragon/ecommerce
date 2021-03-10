import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  constructor() {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    /* this.emailField.valueChanges.subscribe((value) => {
      console.log(value);
    }); */
  }

  ngOnInit(): void {}

  /*  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  } */
}
