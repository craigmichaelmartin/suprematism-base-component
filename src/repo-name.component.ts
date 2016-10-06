import { Component } from '@angular/core';

@Component({
  selector: 'supre-repo-name',
  template: require('./repo-name.component.html'),
  styles: [require('./repo-name.component.css')]
})
export class RepoNameComponent {
  title = 'app works!';
}
