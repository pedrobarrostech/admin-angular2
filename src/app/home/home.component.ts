import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OnInit, ChangeDetectorRef } from '@angular/core';

import { ScheduleService } from '../common/_services/schedule.service';
import { Schedule } from '../common/_models/schedule';

@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit{
    localState;
    events: any;
    defaultDate: string = new Date().toLocaleDateString('en-US');
    header: any;
    event: Schedule;
    dialogVisible: boolean = false;
    idGen: number = 100;
    display: boolean = false;

    constructor(public route: ActivatedRoute, 
    private _scheduleService: ScheduleService,
    private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getSchedules();
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            locate: 'pt-br'
        };
    }

    getSchedules() {
        this._scheduleService.getAllSchedules().subscribe(
            data => this.events = data,
            error => console.log(error)
        );
    }
}