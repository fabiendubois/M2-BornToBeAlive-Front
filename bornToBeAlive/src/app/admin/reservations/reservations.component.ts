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
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarVisible = true;
  calendarWeekends = false;
  locale = frLocale;

  calendarEvents: EventInput[] = [
    // { title: 'Event Now', start: new Date() },
  ];

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

  addEvent() {
    console.log(this.calendarEvents);
    const obj = { title: 'TOTO', start: new Date('2019-05-17T03:24:00'), end: new Date('2019-05-17T04:24:00') };
    this.calendarEvents = this.calendarEvents.concat(obj);
    console.log(this.calendarEvents);
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }
}
