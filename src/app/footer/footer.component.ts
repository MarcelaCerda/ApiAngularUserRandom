import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  desarrollador="Marcela Cerda"
  fechadeSitio="23/9/2022"

  constructor() { }

  ngOnInit(): void {
  }

}
