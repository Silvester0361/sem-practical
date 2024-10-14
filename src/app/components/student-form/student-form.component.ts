import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student = {
    stud_id: '',
    stud_name: '',
    marks: {
      subject1: 0,
      subject2: 0,
      subject3: 0,
      subject4: 0,
      subject5: 0
    }
  };
  
  students: any[] = [];
  subjects = [1, 2, 3, 4, 5];

  // Submit form
  onSubmit(event: Event) {
    event.preventDefault();
    fetch('http://localhost:3000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.student)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Student record added:', data);
    })
    .catch(error => {
      console.error('Error adding student record:', error);
    });
  }

  // Fetch student records
  fetchRecords() {
    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(data => {
        this.students = data;
        console.log(this.student)
      })
      .catch(error => {
        console.error('Error fetching student records:', error);
      });
  }
  deleteStudent(id : String){
    console.log(id)
    fetch(`http://localhost:3000/api/students/${id}`,{
      method: 'DELETE',
    }).then(()=>{
      alert("deleted succesfully")
    })
  }
}
