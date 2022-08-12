import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PastSleepPage } from '../past-sleep/past-sleep.page';

@Component({
  selector: 'app-sleep-logger',
  templateUrl: './sleep-logger.page.html',
  styleUrls: ['./sleep-logger.page.scss'],
})
export class SleepLoggerPage implements OnInit {

  constructor(public navCtrl: NavController,public modalController: ModalController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back(); 
  }

  presentModal() {
    console.log("past sleep");
    
      this.modalController.create({
      component: PastSleepPage,
      componentProps: { }
      }).then((modal) => {
        modal.present();
      });
 


  }
}
