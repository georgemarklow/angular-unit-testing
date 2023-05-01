import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', () => {
    const data = service.getData();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTrue();
  });

  it('should return an array of objects', () => {
    const data = service.getData();
    expect(data.every(obj => typeof obj === 'object')).toBeTrue();
  });

  // Add more test cases as needed
});
