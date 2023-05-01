import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { of, combineLatest } from 'rxjs';

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
    const input1$ = of('input1');
    const input2$ = of('input2');
    const expectedOutput = ['input1', 'input2'];

    combineLatest([input1$, input2$]).subscribe(output => {
      expect(output).toEqual(expectedOutput);
    });
  });
});
