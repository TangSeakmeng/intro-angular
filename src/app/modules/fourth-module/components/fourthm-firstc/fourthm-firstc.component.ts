import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ApiResultStore } from 'src/app/stores/api-result.store';

@Component({
  selector: 'app-fourthm-firstc',
  templateUrl: './fourthm-firstc.component.html',
  styleUrls: ['./fourthm-firstc.component.scss']
})
export class FourthmFirstcComponent implements OnInit {

  constructor(
    public apiResultStore: ApiResultStore,
    private fetchApiService: FetchApiService
  ) { }

  ngOnInit(): void {
    this.fetchApiService.getAlbums();
  }

}
