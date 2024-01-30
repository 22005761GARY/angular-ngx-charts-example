import { Component } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { productSales, productSalesMulti } from '../data/products';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent {

  view: [number, number] = [700, 370];
  //圖表的顏色配置
  colorScheme: Color = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
    group: ScaleType.Ordinal,//顏色分組屬性
    selectable: true,//圖表中的元素是否可以選擇
    name: 'Product Usage',
  };
  showLegend: any = true;
  legendPosition: LegendPosition = LegendPosition.Right;
  showLabels: boolean = true;
  isDoughnut: boolean = true;//是否將圓餅圖改為甜甜圈圖
  trimLabels: boolean = true;
  arcWidth: number = 0.5;
  productSales: any = [];
  productSalesMulti: any = [];
  constructor() {
    Object.assign(this, { productSales, productSalesMulti })
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
