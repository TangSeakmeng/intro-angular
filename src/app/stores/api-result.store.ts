import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { IApiResult } from '../interfaces/api-result.interface';

@Injectable()
export class ApiResultStore {

  @observable result0: IApiResult | null = null;
  @observable result: Array<IApiResult> = [];

}
