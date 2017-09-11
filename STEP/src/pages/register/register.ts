import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FirebaseProvider} from './../../providers/firebase/firebase';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

 
public registrationForm:FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
    public firebaseData: FirebaseProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

      this.registrationForm = formBuilder.group({
        'firstName':['', Validators.compose([Validators.required])],
        'lastName': ['', Validators.compose([Validators.required])],
        'schoolName': ['', Validators.compose([Validators.required])],
        'grade':['', Validators.compose([Validators.required])],
        'email':['', Validators.compose([Validators.required])],
        'phone': ['', Validators.compose([Validators.required,  Validators.maxLength(10)])]

        
      });

  }

  registerStudent() {
      this.firebaseData.saveStudentDetails(this.registrationForm.value.firstName, 
                                            this.registrationForm.value.lastName, 
                                            this.registrationForm.value.schoolName, 
                                            this.registrationForm.value.grade,
                                             this.registrationForm.value.email,
                                             this.registrationForm.value.phone).then(() =>{
                                               this.registrationForm.reset();
                                             });


      let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
      loader.present();

     let alert = this.alertCtrl.create({
      title: 'Registration Successful!',
      subTitle: this.registrationForm.value.firstName+', you have been registered for this program successfully!',
      buttons: ['OK']
    });
    alert.present();
  }

 

}
