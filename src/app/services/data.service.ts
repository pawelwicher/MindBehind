import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDto } from '../models/data-dto';

@Injectable({ providedIn: 'root' })
export class DataService {

  private readonly dataFileLocation = 'https://raw.githubusercontent.com/MindBehind2021/WebPage/main/data.json';

  constructor(private http: HttpClient) { }

  public getData(): Observable<DataDto[]> {
    return this.http.get<DataDto[]>(this.dataFileLocation);
  }

}
