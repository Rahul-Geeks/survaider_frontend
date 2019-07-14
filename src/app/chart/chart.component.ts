import { Component, OnInit, ViewChild } from '@angular/core';
import { AdultDataService } from '../services/adult-data.service';
import { ChartErrorEvent, ChartEvent, GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  charts: any;
  relation: any;
  maleCount: Number;
  femaleCount: Number;
  notInFamily: Number;
  husband: Number;
  wife: Number;
  ownChild: Number;
  otherRelative: Number;
  unmarried: Number;
  @ViewChild('chart')
  chart: GoogleChartComponent;
  constructor(private adultDataSrv: AdultDataService) { }
  ngOnInit(): void {
    this.sexRatio();
    this.relationshipStatus();
  }

  public sexRatio() {
    this.adultDataSrv.sexRatio()
      .subscribe(
        res => {
          console.log(res);
          this.maleCount = res.response.male;
          this.femaleCount = res.response.female;
          this.charts = {
            title: "Distribution of number of males and females",
            type: 'PieChart',
            columnNames: ['Gender', 'Count'],
            data: [['Male', this.maleCount], ['Female', this.femaleCount]],
            height: 400,
            width: 600
          };
        }, err => {
          console.log("Error while fetching sex ratio");
          console.log(err);
        }
      );
  }

  public relationshipStatus() {
    this.adultDataSrv.relationShipStatus()
      .subscribe(
        res => {
          console.log(res);
          this.notInFamily = res.response.notInFamily;
          this.husband = res.response.husband;
          this.wife = res.response.wife;
          this.ownChild = res.response.ownChild;
          this.otherRelative = res.response.otherRelative;
          this.unmarried = res.response.unmarried;
          this.relation = {
            title: "Number of people in each relationship status",
            type: 'PieChart',
            columnNames: ['Relationship Status', 'Count'],
            data: [['Not-in-family', this.notInFamily], ['Husband', this.husband]
              , ['Wife', this.wife], ['Own-child', this.ownChild]
              , ['Other-relative', this.otherRelative], ['Unmarried', this.unmarried]],
              height: 400,
              width: 600
          };
        }, err => {
          console.log("Error while fetching 'realtionship' status data");
          console.log(err);
        }
      )
  }
}
