import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor() {
    console.log('Hello FirebaseProvider Provider');
  }

  saveStudentDetails(firstName: string, lastName: string, schoolName: string, grade: any, email: any, phone: any):any {
      return firebase.database().ref('students').push({firstName: firstName,
                                                        lastName: lastName,
                                                        schoolName: schoolName,
                                                        grade: grade,
                                                        email: email,
                                                        phone: phone
                                                     });
  }

  saveLoginDetails(userName: string, password: any): any {
    return firebase.database().ref('loginDetails').push({userName: userName,
                                                          password: password});
  }



}
