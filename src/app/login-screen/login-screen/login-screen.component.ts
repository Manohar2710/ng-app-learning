import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginScreenComponent {

}
