import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { of, interval } from 'rxjs';
import { exhaustAll, take } from 'rxjs/operators';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should produce the correct output', () => {
    const input$ = of(interval(500).pipe(take(2)), interval(1000).pipe(take(2)));
    const expectedOutput = [0, 1, 2];

    input$.pipe(exhaustAll()).subscribe(output => {
      expect(output).toEqual(expectedOutput);
    });
  });
});
