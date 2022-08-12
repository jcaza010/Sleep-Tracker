import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';
//import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { PastSleepPage } from '../past-sleep/past-sleep.page';
import { PastSleepinessPage } from '../past-sleepiness/past-sleepiness.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	resource:object[];
	displayoptions:boolean;



	constructor(public sleepService:SleepService, public navCtrl: NavController,public modalController: ModalController,public animationCtrl:AnimationController, public alertController: AlertController) {
  this.displayoptions =false;
	}

	ngOnInit() {
		console.log(this.allSleepData);
		this.sleepService.showAllSleepinessData();
		

	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	dataPresent(){
		return !SleepService.storageEmpty;
	}

	goToSleepLogger(){
		//sleep-logger
		//this.navCtrl.navigateForward('/sleep-logger');
		this.displayoptions=false;
		 this.modalController.create({
      component: PastSleepPage,
      componentProps: { }
      }).then((modal) => {
        modal.present();
      });
	}
	goToSleepinessLogger(){
		//sleep-logger
		//this.navCtrl.navigateForward('/sleepiness-logger');
		this.displayoptions=false;
		 this.modalController.create({
      component: PastSleepinessPage,
      componentProps: { }
      }).then((modal) => {
        modal.present();
      });
	}
	goToSleepData(){
		this.navCtrl.navigateForward('/sleep-data');
	}

	toggle(){
		this.displayoptions=!this.displayoptions;
	}

	confirmClearAll() {
		this.alertController.create({
			header: 'Clear all data',
			message: 'Are you sure you would like to clear all logged data?',
			buttons: [{
			text: 'Cancel',
			role: 'cancel',
			handler: () => {
				console.log('Cancel clicked'); }
			}, {
			text: 'Delete',
			role: 'destructive',
			handler: () => {
				console.log('Delete clicked'); 
				this.sleepService.clearAll();
			}
				
				
			}]
			}).then((actionSheet) => {
				actionSheet.present();
			}); 
		}

	confirmDelete(sleepData) {
		this.alertController.create({
			header: 'Delete logged data',
			message: 'Are you sure you would like to delete logged data?',
			buttons: [{
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked'); }
				}, {
				text: 'Delete',
					role: 'destructive',
				handler: () => {
					console.log(sleepData.constructor.name);
					if (sleepData.constructor.name == "StanfordSleepinessData"){
						this.sleepService.removeSleepinessData(sleepData);
					} else if (sleepData.constructor.name == "OvernightSleepData"){
						this.sleepService.removeOvernightData(sleepData);
					}
					
				}}]
			}).then((actionSheet) => {
					actionSheet.present();
				}); 
	}

}
