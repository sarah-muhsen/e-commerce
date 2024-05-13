import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavComponent } from 'src/app/components/auth-nav/auth-nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [CommonModule,AuthNavComponent,RouterOutlet,FooterComponent],
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.scss']
})
export class AuthlayoutComponent {

}
