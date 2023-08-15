import { trigger, transition, style, animate } from "@angular/animations";

export const fade = trigger('fade', [
    transition(':enter', [
        style({ opacity: 0, height: 0, padding: 0 }),
        animate("200ms ease-in-out", style({ opacity: 1, height: '*', padding: '*' })),
    ]),
    transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0, height: 0, padding: 0 })),
    ])
])