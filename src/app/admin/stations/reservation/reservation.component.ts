import { Component, ViewChild, OnInit } from '@angular/core';

// Full Calendar
import { FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Service
import { StationsService } from 'src/app/shared/services/stations.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarVisible = true;
  calendarWeekends = false;
  locale = frLocale;

  calendarEvents: EventInput[] = [];

  reservations;

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations() {
    this.stationsService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
        this.makeEventsFromReservations();
      });
  }

  makeEventsFromReservations() {
    for (const reservation of this.reservations) {
      const obj = {
        title: `${reservation.stations.name.toUpperCase()}  ${reservation.stations.organisation}`,
        start: new Date(reservation.debut),
        end: new Date(reservation.fin)
      };

      this.calendarEvents = this.calendarEvents.concat(obj);
    }
  }
}
