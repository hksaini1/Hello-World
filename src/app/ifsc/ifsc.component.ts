import { Component, OnInit,Input } from '@angular/core';
import {NgForm,FormsModule} from '@angular/forms';
import {DataService} from '../data.service';
@Component({
  selector: 'app-ifsc',
  templateUrl: './ifsc.component.html',
  styleUrls: ['./ifsc.component.css']
})
export class IfscComponent implements OnInit {
  bank:any;
  constructor( private DataService:DataService) { }

  ngOnInit() {
  }

  search(f){
    this.DataService.Search(f.value.searchName).subscribe( data => {
      this.bank = data;

    });
  }
}
