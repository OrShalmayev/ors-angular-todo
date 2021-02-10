import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger,
} from '@angular/animations';

export const cardSlide = trigger('cardAnimations', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(60%)' }),
        stagger(
          '50ms',
          animate(
            '550ms ease-out',
            style({ opacity: 1, transform: 'translateX(0)' })
          )
        ),
      ],
      { optional: true }
    ),

    query(
      ':leave',
      [
        style({ opacity: 1, transform: 'translateX(0)' }),
        stagger(
          '50ms',
          animate(
            '550ms ease-out',
            style({ opacity: 0, transform: 'translateX(60%)', height: 0 })
          )
        ),
      ],
      { optional: true }
    ),
  ]),
]);
