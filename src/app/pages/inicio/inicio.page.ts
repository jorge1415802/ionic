import { Component, OnInit } from '@angular/core';

interface Componente {
  icon : string;
  name : string;
  redirectTo : string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon : 'american-football',
      name : 'Action Sheet',
      redirectTo : '/action-sheet',
    },
    {
      icon : 'alert-circle-outline',
      name : 'Alert',
      redirectTo : '/alert',
    },
    {
      icon : 'beaker-outline',
      name : 'Avatar',
      redirectTo : '/avatar',
    },
    {
      icon : 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo : '/button'
    },
    {
      icon : 'card-outline',
      name: 'Cards',
      redirectTo : '/card'
    },
    {
      icon : 'checkmark-circle-outline',
      name: 'Check',
      redirectTo : '/check'
    },
    {
      icon : 'calendar-outline',
      name: 'Date Time',
      redirectTo : '/date-time'
    },
    {
      icon : 'calendar-outline',
      name: 'Fab',
      redirectTo : '/fab'
    },
    {
      icon : 'calendar-outline',
      name: 'Grid',
      redirectTo : '/grid'
    },
    {
      icon : 'calendar-outline',
      name: 'Infinite',
      redirectTo : '/infinite'
    },
    {
      icon : 'calendar-outline',
      name: 'Input',
      redirectTo : '/input'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
