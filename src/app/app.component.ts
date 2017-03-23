import { Component } from '@angular/core';
import {BackendRequestService} from "./backend-request.service";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {

  departuresObject: any = null;
  departures: any = null;
  stopName: string  = '';
  destination: string  = '';
  interval: number = 0;

  constructor(private _backEndRequestService: BackendRequestService) {}

  ngOnInit() {
    this.getDeparturesFromApi();
  }

  getDeparturesFromApi() {
    this._backEndRequestService.getDeparturesFromApi().subscribe(res => {
      this.departuresObject = res;
      this.departures = this.departuresObject.departures
      this.stopName = this.departuresObject.stopname;
      this.destination = this.departuresObject.destination;

      if(this.interval == 0) {
        this.interval = ((60 - new Date().getSeconds()) * 1000); // The first interval is the time left until next full minute
        console.log('First interval: ', this.interval)
      }
      else {
        this.interval = 30000;
        console.log('Interval: ', this.interval)
      }

      setTimeout(() => {
        this.getDeparturesFromApi()
      }, this.interval)
    });
  }

  timeLeft(ts) {
    let momentTs = moment(ts, 'HH:mm');
    let momentTsNow = moment().format('HH:mm');
    let ms = moment(momentTs, "HH:mm").diff(moment(momentTsNow, "HH:mm"));

    let x = ms / 1000;
    // let seconds = x % 60;
    x /= 60;
    let minutes = (x % 60);
    x /= 60;
    let hours = Math.round(x % 24);

    if (hours > 0) {
      return hours.toString() + 'h ' + minutes.toString() + 'm'
    }
    else {
      return  minutes.toString() + 'm'
    }
  }
}
