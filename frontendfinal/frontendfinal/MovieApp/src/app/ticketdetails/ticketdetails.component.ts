import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router:Router){}
  id!: number;
  mname!: String;
  tname!: String;
  // numberofseats!: number;
  // seatNumber!: String;
  tseats!:number;
  aseats!:number;
  ns!:number;
  seatno!:String;
  ngOnInit(): void {
    this.id=this.data.id;
    this.mname=this.data.mname;
    this.tname=this.data.tname;
    this.tseats=this.data.tseats;
    this.aseats=this.data.aseats;
    this.ns=this.data.ns;
    this.seatno=this.data.seatno;
    // this.numberofseats=this.data.ts;
    // this.seatNumber=this.data.seatno;

  }
  view(){
   // this.reloadComponent(true)
    this.router.navigate(['/homeuser']);
    window.location.reload();
  }
}
