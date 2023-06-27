import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrls: ['./viewtickets.component.css']
})
export class ViewticketsComponent implements AfterViewInit,OnInit{


  tickets!: Ticket[];
  constructor(private router:Router,private movieService:MovieService,
    private activatedRoute:ActivatedRoute,private ticketService:TicketService,
    public dialog: MatDialog){}
  displayedColumns: string[] = ['ticketId','movie_id_fk', 'movieName', 'theatreName', 'numberOfSeats','seatNumber'];
  public dataSource = new MatTableDataSource<Ticket>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  applyFilter(event: Event) {
    console.log(this.dataSource);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    
   id!: number;
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.viewTickets();

  }
  viewTickets(){
    this.ticketService.viewTicketsByMovie(this.id).subscribe(data=>{
      this.tickets=data;
      this.dataSource.data=data as Ticket[];
      console.log(data);
    })
  }
  back(){
    this.router.navigate(['/homeadmin'])
  }
  
}
