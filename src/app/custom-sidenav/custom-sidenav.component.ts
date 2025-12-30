import { Component, computed, Input, signal } from '@angular/core';


export type MenuItem={
  icon:string;
  label:string;
  route:string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false)
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard'
    },
    {
      icon:'analytics',
      label:'Projects',
      route:'projects'
    },
     {
      icon:'book',
      label:'Education',
      route:'education'
    },
    {
      icon:'contact_support',
      label:'Contact',
      route:'contact'
    }
  ])

  profilePicSize = computed(()=>this.sideNavCollapsed()?'32':'100');
}
