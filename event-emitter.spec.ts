import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Output } from '@angular/core';

import { MyComponent } from './my-component.component';

@Component({
  template: `
    <button (click)="onButtonClick()">Click me</button>
  `
})
class TestComponent {
  @Output() buttonClicked = new EventEmitter<boolean>();

  onButtonClick() {
    this.buttonClicked.emit(true);
  }
}

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent, TestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle button clicked event', () => {
    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    spyOn(component, 'handleButtonClick');

    testComponent.buttonClicked.emit(true);
    testFixture.detectChanges();

    expect(component.handleButtonClick).toHaveBeenCalledWith(true);
  });
});
