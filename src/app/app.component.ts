import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NecroComponent } from './necro/necro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NecroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'module-app';
}
