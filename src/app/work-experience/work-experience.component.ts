import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
workExperience: Array<any>=[];

  constructor() { }

  ngOnInit(): void {
    let work1={
fecha:"2018-2022",
Ubicacion:"Ixtac, Ver.",
puesto:"CEO",
empresas:"google",
logros:[
{descripcion:"desarrollo de software" }

]  



    };

    let work2={
      fecha:"2014-2018",
      Ubicacion:"Orizaba, Ver.",
      puesto:"CEO",
      empresas:"spotify",
      logros:[
        {descripcion:"desarrollo de sofware" }
        
        ]  
      


    };
    let work3={
      fecha:"2010-2014",
      Ubicacion:"Orizaba, Ver.",
      puesto:"CEO",
      empresas:"ADESOFT",
      logros:[
        {descripcion:"desarrollo de software" }
        
        ]  
      


    };
    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}
