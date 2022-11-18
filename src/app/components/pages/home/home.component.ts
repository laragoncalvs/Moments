import { Component, OnInit } from '@angular/core';


import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/service/moment.service';
import { environment } from 'src/environments/environment';

import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faClock = faClock;
  faComment = faComment;
  faSearch = faSearchengin;

  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      });

      this.allMoments = data;
      this.moments = data;
  
    });

   
  }

  search(event: Event): void{
    const target = event.target as HTMLInputElement
    const value = target.value;

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLowerCase().includes(value)
    })


  }
}
