import { Component,OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'assesment2';
workout: any = {
  name: '',
};
alloWAdd = false
  rstbtn = false;
  services = []
  notes=  [];

  constructor(){}
  ngOnChanges(){  
  }

  ngOnInit(){
  }

  onServiceChanged(e) {
    if (e == "" && this.services.length == 0) {
      this.rstbtn = false;
    } else {
      var index = this.services.findIndex(x => x == e)
      if (index <= -1) {
        this.services.push(e);

      }
      else if (index > -1 && e != "") {
        alert("Already Exist");
      }
      this.rstbtn = true;
    }
  }
  onAddClick(inputtext){
    this.notes.push(inputtext);
    this.workout.name = ''
  }

  onResetTextClick(){
    this.workout.name = ''
  }

  onResetClick(){
    this.services.length=0;
    this.rstbtn = false;
  }
}
