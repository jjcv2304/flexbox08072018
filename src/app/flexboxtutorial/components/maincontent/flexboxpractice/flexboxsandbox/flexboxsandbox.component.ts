import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

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
const colors: string[] = ['red', 'green', 'blue', 'yellow', 'pink', 'grey', 'light-red', 'light-blue'];

@Component({
  selector: 'app-flexboxsandbox',
  templateUrl: './flexboxsandbox.component.html',
  styleUrls: ['./flexboxsandbox.component.scss']
})
export class FlexboxsandboxComponent implements OnInit {
  displayedColumnsContainerProperties: string[] = ['value'];
  dataSourceContainerProperties = new MatTableDataSource(containerProperties);
  displayedColumnsItemProperties: string[] = [ 'value'];
  dataSourceItemProperties = new MatTableDataSource(itemProperties);
  get ValueType() { return ValueType; }
  @ViewChild('sandboxContent', {read: ElementRef}) sandboxContent: ElementRef;
  selectedSandboxDiv: ElementRef;
  numberOfElementsInSandbox = 0;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  addDiv() {
    const div = this.createNewDiv();
    this.renderer.appendChild(this.sandboxContent.nativeElement, div);
    this.numberOfElementsInSandbox += 1;
  }
  private addClickEvent(div) {
    this.renderer.listen(div, 'click', () => {
      this.selectedSandboxDiv = div;
    });
  }
  private createNewDiv() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Id: ' + this.numberOfElementsInSandbox);
    this.renderer.appendChild(div, text);
    this.renderer.setStyle(div, 'background-color', colors[this.numberOfElementsInSandbox]);
    this.renderer.setStyle(div, 'height', '100%');
    this.renderer.setStyle(div, 'width', '100%');
    this.addClickEvent(div);
    return div;
  }

  deleteDiv() {
    this.renderer.removeChild(this.sandboxContent.nativeElement, this.selectedSandboxDiv);
    this.numberOfElementsInSandbox -= 1;
  }

  newSandbox() {
    const divs = this.sandboxContent.nativeElement.children;
    for (const div of divs) {
      this.renderer.removeChild(this.sandboxContent.nativeElement, div);
    }
    this.numberOfElementsInSandbox = 0;
  }

}
