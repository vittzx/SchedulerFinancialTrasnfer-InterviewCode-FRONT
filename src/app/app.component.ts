import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SchedulerComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scheduler-financial-transfer';
}
