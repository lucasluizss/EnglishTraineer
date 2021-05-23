import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(environment.firebaseConfig)
  }

}
