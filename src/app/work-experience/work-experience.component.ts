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
      Ubicacion:"Orizaba, Ver.",
      puesto:"CEO",
      empresas:"google",
      logros:[
      {descripcion:"desarrollo de software" }
      
      ]  
      
      
      
          };
      
          let work2={
            fecha:"2014-2018",
            Ubicacion:"Estados unidos",
            puesto:"desarrollador junior",
            empresas:"Electronic Arts",
            logros:[
              {descripcion:"desarrollo de nuevo motor para videojuegos" }
              
              ]  
            
      
      
          };
          let work3={
            fecha:"2010-2014",
            Ubicacion:"Orizaba, Ver",
            puesto:"Dessarrollador junior",
            empresas:"Empresa personal",
            logros:[
              {descripcion:"desarrollo de paginas web para grandes empresas" }
              
              ]  
            
      
      
          };
          this.workExperience.push(work1);
          this.workExperience.push(work2);
          this.workExperience.push(work3);
        }
      
  }


