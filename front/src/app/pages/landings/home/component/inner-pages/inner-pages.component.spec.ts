import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InnerPagesComponent } from './inner-pages.component'

describe('InnerPagesComponent', () => {
  let component: InnerPagesComponent
  let fixture: ComponentFixture<InnerPagesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerPagesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InnerPagesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
