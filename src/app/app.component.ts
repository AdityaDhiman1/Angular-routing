import { Component, OnInit} from '@angular/core';
import { faX,faBars } from '@fortawesome/free-solid-svg-icons';
import * as $ from  'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularrouting';
  faX = faX;
  faBars = faBars;
  constructor() { }
  ngOnInit() {
    // $('.open').on('click', function () {
    //   $('ul').show();
    //   $(this).hide();
    //   $('.close').show();
    //   $('.close').on('click', function () {
    //     $(this).hide();
    //     $('ul').hide();
    //     $('.open').show();
    //    })
    // });
}
}
