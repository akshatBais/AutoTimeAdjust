import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  timeCalcuate:FormGroup;

  ngOnInit(){
    this.timeCalcuate = new FormGroup({
      Hours : new FormControl(),
      Minutes : new FormControl(),
      Seconds : new FormControl()
    });
  }

  checkTime(Hours , Minutes , Seconds) {

    let newSecondsValue = Seconds % 60;
    let totalMinutes = Number(Minutes) + ((Seconds - (Seconds % 60)) / 60);
    let newMinutesValue = totalMinutes % 60;
    let newHourValue = Number(Hours) + ((totalMinutes - (totalMinutes % 60)) / 60);

    this.timeCalcuate.get('Hours').setValue(newHourValue);
    this.timeCalcuate.get('Minutes').setValue(newMinutesValue);
    this.timeCalcuate.get('Seconds').setValue(newSecondsValue);
  }

 
 

 
}


// angular form is group of controls
