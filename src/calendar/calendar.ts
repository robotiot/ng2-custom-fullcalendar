import {Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from "fullcalendar";

/*
  Generated class for the Calendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterViewChecked{

  @Input() options:Options;
  @Input() name:string;
  text: string;
  calendarInitiated:boolean;

  constructor(
    private element:ElementRef
  ) {
  }

  ngOnInit():void {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      // console.log("100ms after ngAfterViewInit ");
      $("#" + this.name).fullCalendar(this.options);
    }, 100)
  }
  ngAfterContentChecked(){
  }
  ngAfterViewChecked(){
  }

  updateEvent(event) {
    return $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  updateEvents(events) {
    return $(this.element.nativeElement).fullCalendar('updateEvents', events);
  }

  clientEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }

  removeEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('removeEvents', idOrFilter);
  }

  addEventSource(source) {
    return $(this.element.nativeElement).fullCalendar('addEventSource', source);
  }

  refetchEvents() {
    return $(this.element.nativeElement).fullCalendar('refetchEvents');
  }

  renderEvents(events, stick?) {
    return $(this.element.nativeElement).fullCalendar('renderEvents', events, stick);
  }

  rerenderEvents() {
    return $(this.element.nativeElement).fullCalendar('rerenderEvents');
  }

}
