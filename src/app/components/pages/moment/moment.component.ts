import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/service/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  BaseApiUrl = environment.baseApiUrl;

  moment?: Moment;


  constructor(private momentService: MomentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }

}
