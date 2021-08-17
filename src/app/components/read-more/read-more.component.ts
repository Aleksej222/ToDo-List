import { Component } from "@angular/core";

@Component({
  selector: 'read-more',
  template: `
      <div [class.collapsed]="isCollapsed">
          <ng-content></ng-content>
      </div>
      <div (click)="isCollapsed = !isCollapsed" class="read-more-button">{{isCollapsed?'Read more':'Hide'}}</div>
  `,
  styles: [`
      div.collapsed {
          height: 250px;
          overflow: hidden;
      }
      .read-more-button:hover{
cursor:pointer;
text-decoration:underline;
      }
  `]
})

export class ReadMoreComponent {
  isCollapsed = true;
}