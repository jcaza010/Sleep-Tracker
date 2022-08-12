import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PastSleepinessPage } from '../past-sleepiness/past-sleepiness.page';
import { CurrentSleepinessPage } from '../current-sleepiness/current-sleepiness.page';

@Component({
  selector: 'app-sleepiness-logger',
  templateUrl: './sleepiness-logger.page.html',
  styleUrls: ['./sleepiness-logger.page.scss'],
})
export class SleepinessLoggerPage implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back(); 
  }

  presentModal1() {
    console.log("current seepiness");
    
      this.modalController.create({
      component: CurrentSleepinessPage,
      componentProps: { }
      }).then((modal) => {
        modal.present();
      });
    }

    presentModal2() {
      console.log("past seepiness");
      
        this.modalController.create({
        component: PastSleepinessPage,
        componentProps: { }
        }).then((modal) => {
          modal.present();
        });
      }

}
