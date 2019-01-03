import { Component } from '@angular/core';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-manager';

  ngOnInit() {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('Particles loaded ...');
    })
  }
}
