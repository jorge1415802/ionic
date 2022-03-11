import { Component, OnInit, ViewChild } from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular'
@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data : any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infinitScroll : IonInfiniteScroll;
  
  constructor() { }

  ngOnInit() {
  }

  loadData(event : any) {
    console.log(event)
    setTimeout(() => {
      console.log('Done');
      if(this.data.length > 60) {
        this.infinitScroll.complete();
        this.infinitScroll.disabled = true;
      } 

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      this.infinitScroll.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }
}
