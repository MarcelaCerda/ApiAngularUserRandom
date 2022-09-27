import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Portfolio';
  nombre="Marcela"
  apellido="Cerda"
  foto="https://lh3.googleusercontent.com/a-/ACNPEu_r2EBdnJP-CDlquVpuxwxt8DDkrEThdDaXH38b=s288-p-rw-no"
  hijos=[
    {nombre:"Santiago", fechaNacimiento:"01-01-1995", estudios:" bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"},
    {nombre:"Florencia", fechaNacimiento:"01-01-1995", estudios:" bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"},
  ] 
 
  constructor() { }

  ngOnInit(): void {
  }

}
