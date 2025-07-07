import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header'; // ✅ Import actual child component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // ✅ Use child components here
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'GEC';
  name = '';
  email = '';
  phNo = '';
  submitted = false;
  submitForm(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form Submitted!', {
        name: this.name,
        email: this.email,
        phNo: this.phNo,
      });
    }
  }
}
