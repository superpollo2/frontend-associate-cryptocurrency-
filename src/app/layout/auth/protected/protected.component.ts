import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss',
})
export class ProtectedComponent {}
