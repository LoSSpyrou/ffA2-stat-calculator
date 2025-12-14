import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from '../models/stats';

@Pipe({
    name: 'statFilter',
    standalone: false
})
export class StatFilterPipe implements PipeTransform {
  transform(stats: Stat[], filterStat?: Stat): Stat[] {
    return stats.filter((stat) => stat !== filterStat);
  }
}
