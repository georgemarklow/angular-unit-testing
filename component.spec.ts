import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { MyComponent } from './my-component.component';

@Component({
  selector: 'app-test-host',
  template: '<app-my-component [name]="name"></app-my-component>'
})
class TestHostComponent {
  @Input() name: string;
}

describe('MyComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent, TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should render the name property in the template', () => {
    testHostComponent.name = 'John';
    fixture.detectChanges();
    const nameElement = fixture.nativeElement.querySelector('.name');
    expect(nameElement.textContent).toContain('John');
  });
});
