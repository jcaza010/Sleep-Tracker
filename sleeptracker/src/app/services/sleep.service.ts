import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static storageEmpty = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];
	private _storage: Storage | null = null;
	
	constructor(private storage: Storage) {
		this.init();
	}

	init() {
    this.storage.create().then((s) => {
		const storage = s;
		this._storage = storage;
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
		}
	});
    
  }
    
  public showAllSleepinessData(){
	let sleepinessdata:Object[] = [];
  }

	private addDefaultData() {
		this._storage.keys().then((keys) => {
			for (let i = keys.length-1; i >= 0; i--){
				var k:string = keys[i];
				this._storage.get(k).then((s)=>{
					if (s.loggedValue == undefined){
						var temp1 = new OvernightSleepData(s.sleepStart, s.sleepEnd);
						temp1.id = s.id;
						SleepService.AllOvernightData.push(temp1);
						SleepService.AllSleepData.push(temp1);
					} else if (s.sleepStart == undefined){
						var temp2 = new StanfordSleepinessData(s.loggedValue, s.loggedAt);
						temp2.id = s.id;
						SleepService.AllSleepinessData.push(temp2);
						SleepService.AllSleepData.push(temp2);
					}
				});
			}
			if (keys.length == 0){
				SleepService.storageEmpty = true;
			}
			
		});
		//this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		//this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		//this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		this._storage.set(sleepData.id, sleepData);
		SleepService.storageEmpty = false;
	}
	
	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		this._storage.set(sleepData.id, sleepData);
		SleepService.storageEmpty = false;
	}

	public clearAll(){
		this._storage.clear();
		SleepService.AllSleepData = [];
		SleepService.AllOvernightData = [];
		SleepService.AllSleepinessData = [];
		SleepService.storageEmpty = true;
	}

	public removeSleepinessData(sleepData:StanfordSleepinessData){
		SleepService.AllSleepData = SleepService.AllSleepData.filter((item) => {
			return item.id != sleepData.id;
		});
		SleepService.AllSleepinessData = SleepService.AllSleepinessData.filter((item) => {
			return item.id != sleepData.id;
		});
		this._storage.remove(sleepData.id);
		if (SleepService.AllSleepData.length == 0){
			SleepService.storageEmpty = true;
		}
	}

	public removeOvernightData(sleepData:OvernightSleepData){
		SleepService.AllSleepData = SleepService.AllSleepData.filter((item) => {
			return item.id != sleepData.id;
		});
		SleepService.AllOvernightData = SleepService.AllOvernightData.filter((item) => {
			return item.id != sleepData.id;
		});
		this._storage.remove(sleepData.id);
		if (SleepService.AllSleepData.length == 0){
			SleepService.storageEmpty = true;
		}
	}

}
