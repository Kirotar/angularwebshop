import {Component, signal} from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
    selector: 'app-home',
    imports: [GreetingComponent, CounterComponent],
    templateUrl: './home.component.html',
    standalone: true,
    styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('Hi world');

  keyUpHandler(event: KeyboardEvent){
    console.log(`user typed ${event.key}`);
  }
}
