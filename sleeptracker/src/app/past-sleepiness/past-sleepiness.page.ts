import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-past-sleepiness',
  templateUrl: './past-sleepiness.page.html',
  styleUrls: ['./past-sleepiness.page.scss'],
})
export class PastSleepinessPage implements OnInit {

  currentValue:number = 4;
  desc:string = StanfordSleepinessData.ScaleValues[4];
  
  inputsTime:any;
  inputsDate:any;
  summaryString:String;
  constructor(public modalController:ModalController, public toastController: ToastController,public sleepService:SleepService){ 
  }

  ngOnInit() {
    let current = new Date();
    this.inputsDate = current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + current.getDate();
    this.inputsTime = current.toLocaleTimeString('it-IT').slice(0, 5);
  }

  updateDesc(){
    this.desc = StanfordSleepinessData.ScaleValues[this.currentValue];
  }

  logSleepiness(){
    //let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let selected = new Date(this.inputsDate.slice(0, 4), this.inputsDate.slice(5, 7) - 1, this.inputsDate.slice(8, 10));
    selected.setHours(this.inputsTime.slice(0, 2))
    selected.setMinutes(this.inputsTime.slice(3, 5))
    
    let dataobject = {};
    dataobject["date"] = selected;
    dataobject["value"] = this.currentValue;
    console.log(dataobject);
    //this.sleepService.set(dataobject);
    let sleepinesslog = new StanfordSleepinessData(this.currentValue, selected);
    //SleepService.AllSleepinessData.push(sleepinesslog); //logs data into array
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
