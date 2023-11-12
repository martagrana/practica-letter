import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'letter';
  ClincName: string = 'Clinic Name';
  ProviderName: string = 'Provider Name';
  ProviderAdress: string = 'Provider Adress';
  Date: string = 'Date';
  DOB: Date = new Date(1980, 08, 16);
  Testingdate: Date = new Date(2018, 09, 23);
  phonenumber: string = '981263224';
  email: string = 'pruebacarta@gmail.com';
  CHWName: string = 'CHW Name';
  AgencyName: string = 'Agency Name';

  Fasting: string = 'Yes';
  Bloodpressure: string = '149/76';
  Totalcholesterol: number = 235;
  Glucose: number = 106;
  HDL: number = 60;
  HbA1c: string = 'NA';
  LDL: number = 150;
  Bodymassindex: number = 29;
  Triglycerides: number = 130;
  Smokingstatus: string = 'Smoking';
  NonHDL: number = 175;
  Stressscore: string = 'Mild (10)';
  Anxietyscore: string = 'Mild (8)';
}
