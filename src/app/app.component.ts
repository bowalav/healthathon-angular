import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { WebService } from './services/web.service';
import { VariablesService } from './services/variables.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'd2-app';
  links = ['dashboard', 'insurance'];
  activeLink = this.links[0];

  linkStart: boolean = false;
  linkstatus: string;

  cmId: string = '';

  // tempdata: Object;

  constructor(private webService: WebService,private router: Router,
    private variablesService: VariablesService) { }

  sendCmRequest() {
    // console.log('inside sendcmrequest');
    this.webService.get('hello/' + this.cmId).subscribe(data => console.log(data))
  };

  deleteCmRequest() {
    console.log('inside delete');
    this.webService.delete('account').subscribe(() => this.getAccountStatus());
  };

  ngOnInit(): void {
    Auth.currentSession().then((session) => console.log(session.getIdToken().getJwtToken()));

    this.getAccountStatus();
  }

  async getAccountStatus() {
    await this.delay(500);
    this.webService.get('account/').subscribe((data: any) => {
      console.log(data);
      this.linkStart = (data != null);
      if (this.linkStart) this.linkstatus = data.linked;
      this.variablesService.cast.next(data.cmId);

    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setActiveLink(link: any){
    this.router.navigate([link]);
  }
}
