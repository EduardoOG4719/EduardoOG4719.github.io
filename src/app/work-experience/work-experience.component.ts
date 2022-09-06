import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  workExperience: Array<any> = [];

  constructor() { }

  ngOnInit(): void {


    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Orizaba, Ver.",
      puesto: "CEO",
      empresa: "Electronic Arts",
      logros :[
{descripcion:"implementar un nuevo sistema de quimica para el videojuego fifa"}
      ]
    };
    let work2 = {
      fecha: "2014-2018",
      ubicacion: "Estados Unidos",
      puesto: "desarrollador",
      empresa: "Epic games",
      logros :[
        {descripcion:"desarrollo de videojuego"}
              ]
    };
    let work3 = {
      fecha: "2010-2014",
      ubicacion: "Orizaba, Ver",
      puesto: "creador de paginas web",
      empresa: "personal",
      logros :[
        {descripcion:"desarrollo de front-end"}
              ]
    };


    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);

  }

}
