import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptCoreConceptsComponent } from './javascript-core-concepts.component';

describe('JavascriptCoreConceptsComponent', () => {
  let component: JavascriptCoreConceptsComponent;
  let fixture: ComponentFixture<JavascriptCoreConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptCoreConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptCoreConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
