import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: 'card'
    },
    {
      title: 'View by Category',
      url: '/viewby-category',
      icon: 'list'
    },
    {
      title: 'View by Monthly',
      url: '/view-transactionby-monthly',
      icon: 'list'
    },
    {
      title: 'View by Yearly',
      url: '/view-transactionby-yearly',
      icon: 'list'
    },
    {
      title: 'View Categories',
      url: '/view-categories',
      icon: 'cube'
    },
    {
      title: 'Add Categories',
      url: '/category',
      icon: 'cube'
    },
    {
      title: 'EMI Calculator',
      url: '/emi-calculator',
      icon: 'cube'
    },
    {
      title: 'Loan Tracker',
      url: '/loan-tracker',
      icon: 'cube'
    },
    {
      title: 'Budget',
      url: '/budget',
      icon: 'cube'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
