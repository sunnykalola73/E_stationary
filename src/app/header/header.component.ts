import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { 
    
  }

  ngOnInit() {
  }
  

  appitems = [
    {
      label:'Category',
      items: [
        {
          label: 'Art & Craft',
          link: '/art-craft',
          },
        {
          label: 'School Stationary',
          link: '/sch-stationary',
        },
        {
          label: 'Computer Stationary',
          link: '/item-1-1',
          },
          {
            label: 'Office Stationary',
            link: '/item-1-1',
            },
            {
              label: 'College Stationary',
              link: '/item-1-1',
            }
        ]
    },  
  ];

}
