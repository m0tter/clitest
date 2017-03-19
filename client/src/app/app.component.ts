import { Component } from '@angular/core';
import { CliTest } from 'ts-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private clitest: CliTest;

  title = 'app works';
}
