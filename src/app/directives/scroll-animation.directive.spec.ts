import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { ScrollAnimationDirective } from './scroll-animation.directive';

// Componente de prueba para aplicar la directiva
@Component({
    template: `
    <div scrollAnimation></div>
  `
})
class TestComponent { }

describe('ScrollAnimationDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ScrollAnimationDirective, TestComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should add "animate" class when element is intersecting', () => {
        const element = fixture.nativeElement.querySelector('div');
        element.classList.remove('animate'); // Asegúrate de que la clase "animate" no esté presente inicialmente

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    expect(element.classList.contains('animate')).toBe(true); // Verifica que se haya agregado la clase "animate"
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
});