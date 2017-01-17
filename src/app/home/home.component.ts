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
    br: any;
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
            right: 'month,agendaWeek,agendaDay'
        };

        this.br = {
            ignoreTimezone: false,
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 
            'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            axisFormat: 'H:mm',
            timeFormat: {
                '': 'H:mm',
                agenda: 'H:mm{ - H:mm}'
            },
            buttonText: {
                prev: 'Anterior',
                next: 'Próximo',
                prevYear: 'Ano Anterior',
                nextYear: 'Próximo Ano',
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia'
            }
        };
    }

    getSchedules() {
        this._scheduleService.getAllSchedules().subscribe(
            data => this.events = data,
            error => console.log(error)
        );
    }
}