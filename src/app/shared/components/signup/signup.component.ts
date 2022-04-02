import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerMode: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: any): void {
    this.registerMode = registerMode;
  }

}
