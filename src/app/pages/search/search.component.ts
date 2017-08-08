import { Component, OnInit } from '@angular/core';
import { ProvidersService } from './../../providers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
  	private providers: ProvidersService
  ) {

  }

  ngOnInit() {
  	this.getByTitle('Attack on titan');
  }

  getByTitle(value: any) {
  	let param: any = {}
  	param['title'] = value;
  	this.providers.get(param)
  					.then((result) => {
  						console.log(result);
  					})
  }

}