import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FirebaseProvider} from './../../providers/firebase/firebase';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public loginForm:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
    public firebaseData: FirebaseProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
      this.loginForm = formBuilder.group({
        'userName':['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])]
        

        
      });
  }

  login() {
    this.firebaseData.saveLoginDetails(this.loginForm.value.userName, this.loginForm.value.password).then(() => {
      this.loginForm.reset();
    });
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
     loader.present();

     let alert = this.alertCtrl.create({
      title: 'Login Successful!',
      subTitle: 'Login is successful.',
      buttons: ['OK']
    });
    alert.present();

  }

}
