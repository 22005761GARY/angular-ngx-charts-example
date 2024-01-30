import { Component } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { productSalesMulti } from '../data/products';
import {curveCardinal} from 'd3-shape'
@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent {
  productSalesMulti: any = [];
  //圖表的顏色配置
  colorScheme: Color = {
    domain: ['#FF5733', '#33FF57', '#9933FF', '#FF33C7', '#FFFF33'],
    group: ScaleType.Ordinal,//顏色分組屬性
    selectable: true,//圖表中的元素是否可以選擇
    name: 'Product Usage',
  };

  view: [number, number] = [700, 370]; //表示包含 width 和 height 屬性的視圖配置
  legendTitle: string = 'Products'; //標籤標題
  legendTitleMulti: string = 'Months';
  legendPosition: LegendPosition = LegendPosition.Right; // ['right', 'below']
  legend: boolean = true; //是否顯示標籤
  xAxis: boolean = true; //是否顯示x軸，其中包含刻度和標頭
  yAxis: boolean = true;//是否顯示y軸，其中包含刻度和標頭

  yAxisLabel: string = 'Sales'; //y軸標題
  xAxisLabel: string = 'Products'; //x軸標題
  showXAxisLabel: boolean = true; //是否顯示x軸的標題
  showYAxisLabel: boolean = true; //是否顯示y軸的標題

  timeline: boolean = true;
  curve: any = curveCardinal.tension(0);
  constructor() {
    Object.assign(this, { productSalesMulti })
  }

  //點擊事件
  onSelect(event: any) {
    console.log(event);
  }

  //鼠標進入元素時啟動事件
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  //鼠標離開元素時啟動事件
  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
