import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFiel = new FormControl();
  resultado: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.searchFiel.valueChanges
    .pipe(
      debounceTime(400)
    )
    .subscribe( value => {
      this.getData(value);
    });
  }

  private getData(query: string){
    const API = 'P93m9U04Ck88qSdTgSHdavQUIXoltpKM';
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API}&limit=12`)
    .pipe(
      map((response: any) => {
        return response.data.map((item: { images: { downsized: any; }; }) => item.images.downsized)
      })
    )
    .subscribe((data => {
      console.log(data);
      this.resultado = data;
    }));
  }

}
