import { Component } from '@angular/core';
import { productSales, productSalesMulti } from '../data/products';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent {

  title = 'angular-ngx-charts-example';

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
  animations: boolean = false; //是否顯示圖表出場動畫
  showGridLines: boolean = true; //是否顯示網格線
  showDataLabel: boolean = true; //是否顯示數據標籤(數據圖形上方顯示該資料的數據)
  barPadding: number = 50; //每個資料圖形之間的間隔
  tooltipDisabled: boolean = false; //鼠標靠近圖資料圖形時是否要禁用提示框
  trimXAxisTicks: boolean = true; //是否修剪x軸刻度線的顯示(預設為true)
  maxXAxisTickLength: number = 5; //給予x軸刻度線顯示的長度
  gradient: boolean = true; //是否顏色漸變
  xAxisTicks: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  roundEdges: boolean = true; //設置條形圖的邊緣是否應該呈現為圓角
  yScaleMax: number = 10000;
  yScaleMaxMuti: number = 1000;
  wrapTicks: boolean = true; //X軸上的預設標籤文字是否自動換行

  productSales: any = []; // -> 長條圖的result，表示要顯示的條形圖的數據
  productSalesMulti: any = []; // -> 堆疊長條圖的result，表示要顯示的條形圖的數據
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
