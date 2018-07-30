import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export enum ValueType {dropdown, number, string, bool }

export interface FlexboxProperty {
  name: string;
  valueType: ValueType;
  availableValues: string[];
}

const containerProperties: FlexboxProperty[] = [
  {
    name: 'display',
    valueType: ValueType.dropdown,
    availableValues: ['flex']
  }, {
    name: 'flex-direction',
    valueType: ValueType.dropdown,
    availableValues: ['flex-direction: row', 'row-reverse', 'column', 'column-reverse']
  }, {
    name: 'flex-wrap',
    valueType: ValueType.dropdown,
    availableValues: ['nowrap', 'wrap', 'wrap-reverse']
  }, {
    name: 'flex-flow',
    valueType: ValueType.string,
    availableValues: null
  }, {
    name: 'justify-content',
    valueType: ValueType.dropdown,
    availableValues: ['flex-start' , 'flex-end' , 'center' , 'space-between' , 'space-around' , 'space-evenly']
  }, {
    name: 'align-items',
    valueType: ValueType.dropdown,
    availableValues: ['flex-start' , 'flex-end' , 'center' , 'baseline' , 'stretch']
  }, {
    name: 'align-content',
    valueType: ValueType.dropdown,
    availableValues: ['flex-start' , 'flex-end' , 'center' , 'space-between' , 'space-around', 'stretch']
  }
];

const itemProperties: FlexboxProperty[] = [
  {
    name: 'order',
    valueType: ValueType.number,
    availableValues: null
  }, {
    name: 'flex-grow',
    valueType: ValueType.number,
    availableValues: null
  }, {
    name: 'flex-shrink',
    valueType: ValueType.number,
    availableValues: null
  }, {
    name: 'flex-basis',
    valueType: ValueType.string,
    availableValues: null
  }, {
    name: 'flex',
    valueType: ValueType.string,
    availableValues: null
  }, {
    name: 'align-self',
    valueType: ValueType.dropdown,
    availableValues: ['auto' , 'flex-start' , 'flex-end' , 'center' , 'baseline' ,  'stretch']
  }
];

@Component({
  selector: 'app-flexboxsandbox',
  templateUrl: './flexboxsandbox.component.html',
  styleUrls: ['./flexboxsandbox.component.scss']
})
export class FlexboxsandboxComponent implements OnInit {
  displayedColumnsContainerProperties: string[] = ['value'];
  dataSourceContainerProperties = new MatTableDataSource(containerProperties);

  get ValueType() {
    return ValueType;
  }

  displayedColumnsItemProperties: string[] = [ 'value'];
  dataSourceItemProperties = new MatTableDataSource(itemProperties);

  constructor() {
  }

  ngOnInit() {
  }
}
