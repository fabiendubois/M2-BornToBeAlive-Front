import { Component, ViewChild, OnInit } from '@angular/core';

// Full Calendar
import { FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Service
import { CarsService } from 'src/app/shared/services/cars.service';

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

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations() {
    this.carsService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
        this.makeEventsFromReservations();
      });
  }

  makeEventsFromReservations() {
    for (const reservation of this.reservations) {
      const obj = {
        title: `${reservation.cars.marque.toUpperCase()}  ${reservation.cars.modele} ${reservation.cars.immatriculation}`,
        start: new Date(reservation.debut),
        end: new Date(reservation.fin)
      };

      this.calendarEvents = this.calendarEvents.concat(obj);
    }
  }
}
