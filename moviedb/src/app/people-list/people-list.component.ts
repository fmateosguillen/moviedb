import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'profile_path', 'popularity', 'gender'];
  listadoPeople = new MatTableDataSource();
  img_url = 'https://image.tmdb.org/t/p/w500/';
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe(resp => {
      this.listadoPeople.data = resp.results;
    });
  }

}
