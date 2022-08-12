import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { ModalController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-past-sleep',
  templateUrl: './past-sleep.page.html',
  styleUrls: ['./past-sleep.page.scss'],
})
export class PastSleepPage implements OnInit {
  inputsTime:any;
  inputeTime:any;
  inputsDate:any;
  summaryString:String;
  constructor(public modalController:ModalController, public sleepService:SleepService) { }

  ngOnInit() {
    this.inputsDate = new Date().toISOString();
    this.inputeTime = null;
    this.inputsTime = null;
  }
  submitForm()
  {

    if(this.inputsTime==null||this.inputeTime==null)
    {
      this.summaryString="please complete the form";
      return;
    }
    let startDate = new Date(this.inputsDate);
    let endDate = new Date(this.inputsDate);
    startDate.setHours(new Date(this.inputsTime).getHours());
    startDate.setMinutes(new Date(this.inputsTime).getMinutes());
    endDate.setHours(new Date(this.inputeTime).getHours());
    endDate.setMinutes(new Date(this.inputeTime).getMinutes());
    if (startDate>endDate)
    {
      endDate.setDate(endDate.getDate()+1);
    }
    console.log(startDate+"\n"+endDate);
    var temp = new OvernightSleepData(startDate,endDate);
    this.summaryString = temp.summaryString();
    this.sleepService.logOvernightData(temp);
    this.dismiss();
  }

  dismiss()
  {
    this.modalController.dismiss();
  }


}
