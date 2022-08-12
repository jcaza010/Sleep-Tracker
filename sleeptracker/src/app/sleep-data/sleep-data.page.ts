import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-sleep-data',
  templateUrl: './sleep-data.page.html',
  styleUrls: ['./sleep-data.page.scss'],
})
export class SleepDataPage implements OnInit {

  testSleepinessString:string;
  testSleepString:string;


  constructor(public navCtrl: NavController,public sleepService:SleepService) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back(); 
  }

  tempShowSleepiness(){ //temporary function to show sleepiness is logged
    this.testSleepinessString = "";
    for(var i = 0; i < SleepService.AllSleepinessData.length ; i++){
      this.testSleepinessString += SleepService.AllSleepinessData[i].summaryString() + "*|*";
    }
    //this.sleepService.showAllSleepinessData();

  }

  tempShowSleep(){ //temporary function to show sleep is logged
    this.testSleepString = "";
    for(var i = 0; i < SleepService.AllOvernightData.length ; i++){
      this.testSleepString += SleepService.AllOvernightData[i].summaryString() + "*|*";
    }
  }
}
