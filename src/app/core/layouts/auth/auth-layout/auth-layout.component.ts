import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {}
