import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  control = new FormControl([]);

  tags = this.control.valueChanges.pipe(
    startWith(['initial']),
    tap((value) => console.log('subscribed', value))
  );

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    of(['updated'])
      .pipe(
        tap((value) => {
          console.log('value set', value);
          this.control.setValue(value);
        })
      )
      .subscribe();
  }
}
