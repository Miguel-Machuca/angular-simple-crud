import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from "./models/employee";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: "Miguel", country: "Bolivia"},
    {id: 2, name: "Rocio", country: "Bolivia"},
    {id: 3, name: "Maria", country: "Bolivia"},
    {id: 4, name: "Jose", country: "Bolivia"},
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  delete() {
    if (confirm('Are you sure you want to delete?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
