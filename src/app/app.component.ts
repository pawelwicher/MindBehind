import { Component, OnInit } from '@angular/core';
import { DataDto } from './models/data-dto';
import { DataItemModel, DataModel } from './models/data-model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public models: DataModel[] = [];
  public selectedModel: DataModel = { id: '', items: [] };

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.getData().subscribe(
      dtos => {
        this.models = dtos.sort((a, b) => b.id.localeCompare(a.id)).map(x => this.mapDtoToModel(x));
        this.selectedModel = this.models[0];
      }
    );
  }

  private mapDtoToModel(dto: DataDto): DataModel {
    const model = {} as DataModel;
    model.id = dto.id;
    model.items = dto.names.map(name => {
      const item = {} as DataItemModel;
      item.name = name;
      item.filePath = `https://github.com/MindBehind2021/${dto.id}/blob/main/${dto.id}_${name}.mp4?raw=true`;
      return item;
    })
    return model;
  }

}
