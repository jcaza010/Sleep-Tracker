import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-current-sleepiness',
  templateUrl: './current-sleepiness.page.html',
  styleUrls: ['./current-sleepiness.page.scss'],
})
export class CurrentSleepinessPage implements OnInit {

  months:any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
  currentDate:Date;
  day:number;
  month:number;
  year:number;
  hours:number;
  minutes:number;
  ampm:string;
  dateString:string;
  timeString:string;

  currentValue:number = 4;
  desc:string = StanfordSleepinessData.ScaleValues[4];

  constructor(public modalController:ModalController, public toastController: ToastController, public sleepService:SleepService ) { }

  ngOnInit() {
    this.updateCurrent();
  }

  updateCurrent(){
    this.currentDate = new Date();
    this.day = this.currentDate.getDate();
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.hours = this.currentDate.getHours() % 12 == 0 ? 12 : this.currentDate.getHours() % 12;
    this.minutes = this.currentDate.getMinutes();
    this.ampm = this.currentDate.getHours() < 12 ? "am" : "pm";
    this.dateString = this.months[this.month] + " " + this.day + ", " + this.year;
    this.timeString = this.hours + ":" + (this.minutes < 10 ? "0" + this.minutes : "" + this.minutes) + " " + this.ampm;
  }


  updateDesc(){
    this.updateCurrent();
    this.desc = StanfordSleepinessData.ScaleValues[this.currentValue];
  }

  
  logSleepiness(){
    this.updateCurrent();
    var sleepinesslog = new StanfordSleepinessData(this.currentValue);
    this.sleepService.logSleepinessData(sleepinesslog);

    this.presentToast();
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  presentToast() {
    this.toastController.create({
    message: 'Sleepiness successfully logged!',
    duration: 2000
    }).then((toast) => {
    toast.present();
    });
    }

}
