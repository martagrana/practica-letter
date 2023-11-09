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
  DOB: string = 'DOB';
  Testingdate: string = '10/23/2018';
  phonenumber: string = '981263224';
  email: string = 'pruebacarta@gmail.com';
  CHWName: string = 'CHW Name';
  AgencyName: string = 'Agency Name';

  Fasting: string = 'Yes';
  Bloodpressure: string = '149/76';
  Totalcholesterol: string = '235';
  Glucose: string = '106';
  HDL: string = '60';
  HbA1c: string = 'NA';
  LDL: string = '150';
  Bodymassindex: string = '29';
  Triglycerides: string = '130';
  Smokingstatus: string = 'Smoking';
  NonHDL: string = '175';
  Stressscore: string = 'Mild (10)';
  Anxietyscore: string = 'Mild (8)';
}
