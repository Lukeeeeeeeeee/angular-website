import { Pipe, PipeTransform } from '@angular/core';
import { FlyingHeroesPipe } from './flying-heroes.pipe';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {

}
