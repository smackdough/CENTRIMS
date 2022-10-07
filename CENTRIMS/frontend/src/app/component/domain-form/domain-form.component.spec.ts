import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainFormComponent } from './domain-form.component';

describe('QuestionFormComponent', () => {
  let component: DomainFormComponent;
  let fixture: ComponentFixture<DomainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
