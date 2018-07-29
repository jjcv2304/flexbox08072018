import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

enum ValueType {dropdown, number, string, bool }

export interface FlexboxProperty {
  name: string;
  valueType: ValueType;
  availableValues: string[];
}

const containerProperties: FlexboxProperty[] = [
  {name: 'display' , valueType: ValueType.dropdown, availableValues: ['flex'] },
  {name: 'flex-direction', valueType: ValueType.dropdown, availableValues: ['flex-direction: row'
      , 'row-reverse' , 'column' , 'column-reverse']}
];

// const itemProperties: FlexboxProperty[] = [
//   {name: 'order', valueType: ValueType.number, availableValues: null , value: '0' },
//   {name: 'flex-grow', valueType: ValueType.number, availableValues: null , value: '0'}
// ];

@Component({
  selector: 'app-flexboxsandbox',
  templateUrl: './flexboxsandbox.component.html',
  styleUrls: ['./flexboxsandbox.component.scss']
})
export class FlexboxsandboxComponent  implements OnInit {
  displayedColumnsContainerProperties: string[] = ['name', 'value'];
  dataSourceContainerProperties = new MatTableDataSource(containerProperties);
  ValueType: ValueType;
  // displayedColumnsItemProperties: string[] = ['name', 'value'];
  // dataSourceItemProperties = new MatTableDataSource(itemProperties);

  constructor() { }

  ngOnInit() {
  }
}
