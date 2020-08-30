import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private Router: Router) {}

      ngOnInit() {
      
      }

      openProfile(){
        //this.Router.navigateByUrl('/verify');
      }
}
