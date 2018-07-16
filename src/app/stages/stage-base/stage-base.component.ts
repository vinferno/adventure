import { Component, OnInit } from '@angular/core';
import {AllItemsService} from '../../services/all-items.service';

@Component({
  selector: 'vf-stage-base',
  templateUrl: './stage-base.component.html',
  styleUrls: ['./stage-base.component.scss']
})
export class StageBaseComponent implements OnInit {

  public beings = [
    {type: 'player', top: '100', left: '100', backgroundColor: 'pink'},
    {type: 'platform', top: '600', left: '100'},
    {type: 'platform', top: '600', left: '200'},
    {type: 'platform', top: '600', left: '300'},
    {type: 'platform', top: '500', left: '400'},
    {type: 'platform', top: '600', left: '500'},
    {type: 'platform', top: '400', left: '500'},
    {type: 'platform', top: '600', left: '600'},
    {type: 'platform', top: '600', left: '700'},
    {type: 'platform', top: '600', left: '800'},
    {type: 'platform', top: '500', left: '900'},
    {type: 'platform', top: '600', left: '000'}
    ];

  constructor(public allItemsService: AllItemsService) { }

  ngOnInit() {
  }

}
