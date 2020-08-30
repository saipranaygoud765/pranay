import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  
];
const NAMES: string[] = [
  'Sai Pranay Goud', 'Sai Meghana', 'nandu', 'Teju', 'Lakshana', 
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-reg',
  styleUrls: ['reg.component.scss'],
  templateUrl: 'reg.component.html',
})
export class RegComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router:Router) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProfile(name){
    if(name.includes('eju')){
      this.router.navigateByUrl('teju')

    }
    if(name.includes('ranay')){
      this.router.navigateByUrl('verify')
      
    }
    if(name.includes('andu')){
      this.router.navigateByUrl('nandu')
      
    }
    if(name.includes('eghana')){
      this.router.navigateByUrl('maggi')
      
    }
    if(name.includes('akshana')){
      this.router.navigateByUrl('lucky')
      
    }
    
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
