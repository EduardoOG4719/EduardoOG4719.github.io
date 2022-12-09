import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let edu1 = {
                rango: "06/2020-Cursando",
                grado: "Licenciatura de Ingenieria en Software",
                colegio: "Universidad Veracruzana",

    };

    let edu2 = {
                rango: "06/2017-06/2020",
                grado: "Educacion Media",
                colegio: "Colegio de Bachilleres del Estado de Veracruz",
    };

    this.education.push(edu1);
    this.education.push(edu2);

  }

}