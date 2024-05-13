import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankNavComponent } from 'src/app/components/blank-nav/blank-nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blanklayout',
  standalone: true,
  imports: [CommonModule,BlankNavComponent,RouterOutlet,FooterComponent],
  templateUrl: './blanklayout.component.html',
  styleUrls: ['./blanklayout.component.scss']
})
export class BlanklayoutComponent {
gotoup():void{
  scrollTo(0,0);
}

}
