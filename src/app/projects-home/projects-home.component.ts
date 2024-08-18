import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  standalone: true,
  imports: [],
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css'
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string = "William";
  lastName: string = "Wallace";
  phoneNumber: string = "(201) 748-6000";
  mobileNumber: string = "(201) 748- 6015"
  jobTitle: string = "Vice President";

  setProperty(event: Event) {
    let target = event.target as HTMLInputElement;
    let property: string = target.id;
    switch(property) {
      case "firstNameInput":
        this.firstName = target.value;
        break;
      case "lastNameInput":
        this.lastName = target.value;
        break;
      case "phoneNumberInput":
        this.phoneNumber = target.value;
        break;
      case "mobileNumberInput":
        this.mobileNumber = target.value;
        break;
      case "jobTitleInput":
        this.jobTitle = target.value;
        break;
      default:
        console.warn("no matching ID found!");
        break;
    }
  }

  constructor() { }

  ngOnInit(): void { }
}
