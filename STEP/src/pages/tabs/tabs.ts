import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RegisterPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
