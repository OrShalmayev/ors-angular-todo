import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { slider } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit {
  title = 'Or\'s todo app';

  ngOnInit() {
    feather.replace();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
