import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
student: any;
onSubmit($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
fetchRecords() {
throw new Error('Method not implemented.');
}
  students: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any[]>('http://localhost:3000/api/students')
      .subscribe((data) => {
        this.students = data;
      }, (error) => {
        console.error('Error fetching students:', error);
      });
  }
}
