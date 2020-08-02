import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/shared/common/validator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  spinner = false;
  PersonalInfoForm: FormGroup
  isupdate: string = 'false';
  subjectlist: string[] = ['English', 'Marathi', 'Hindi', 'Maths'];

  // pie chart
  public chartType;
  public chartDatasets;
  public chartLabels;
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#A8B3C5'],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  // Bar chart
  public barchartType: string = 'bar';

  public barchartDatasets: Array<any> = [
    { data: [10, 20, 40, 60, 80, 85, 100], label: 'User Score' }
  ];

  public barchartLabels: Array<any> = ['Active', 'Recently Active', 'Most Active', 'Top Active', 'Not Active', 'Verified Active'];

  public barchartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public barchartOptions: any = {
    responsive: true
  };
  public barchartClicked(e: any): void { }
  public barchartHovered(e: any): void { }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) { }

  ngOnInit(): void {

    this.chartType = 'pie';
    this.chartDatasets = [
      { data: [100, 50], label: 'My First dataset' }
    ];
    this.chartLabels = ['Total Users', 'Active Users'];

    //  userdetailsform
    this.PersonalInfoForm = this.formBuilder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, this.validatorService.EmailValidator]),
      Phone: new FormControl('', [Validators.required, this.validatorService.PhoneValidator]),
      Subjects: new FormControl('', [Validators.required])
    });


  }


  // Saveuserdetails 
  SaveUserInfo(data: any) {
    this.spinner = true;
    if (this.PersonalInfoForm.valid) {

      setTimeout(() => {
        this.spinner = false;
        this.PersonalInfoForm.reset();
        data.resetForm();
      }, 1000);
    } else {
      setTimeout(() => {
        this.spinner = false
      }, 1000);
    }

  }
}
