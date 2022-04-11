import {Component} from '@angular/core';
import {Alumno } from 'src/app/model/alumno';
import{ FormsModule } from '@angular/forms'
import { MyDirectiveDirective } from 'src/app/my-directive.directive';


@Component({
  selector: 'app-content',
   templateUrl: './content.component.html',
   styleUrls: ['./content.component.css']
})
export class ContentComponent {
  displayedColumns: string[] = ['id', 'nombre', 'materia', 'profesor', 'actions'];
  selectedAlumno: Alumno = new Alumno();


  alumnoArray: Alumno[] = [
    {id: 1, nombre: 'Mario', materia: "Matematica", profesor: 'Horacio Perez'},
    {id: 2, nombre: 'Jose', materia: "Fisica ", profesor: 'Lucia Muñoz'},
    {id: 3, nombre: 'Ana', materia: "Quimica", profesor: 'Lina Cusco'},
    {id: 4, nombre: 'William', materia: "Dibujo", profesor: 'Bernando Fuentes'},
  ];
  dataSource = this.alumnoArray;

  addOrEdit(){
    if (this.selectedAlumno.id == 0){
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
      console.log(this.alumnoArray)
    }

    this.selectedAlumno = new Alumno();
  }
  openForEdit(alumno: Alumno){
    this.selectedAlumno = alumno;
  }
  delete(){
    this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
    this.selectedAlumno = new Alumno;
  }

  //  eliminar(id: number){ //eliminar
  //         for(let i= 0 ; i < this.alumnoArray.length; i++){
  //           if (this.alumnoArray[i].id == id){
  //             this.alumnoArray.splice(i, 1);
  //           }
  //         }
  //         return this.alumnoArray;
  //     }

    }
