import { Component, OnInit } from '@angular/core';
import {AllItemsService} from '../../services/all-items.service';

@Component({
  selector: 'vf-stage-base',
  templateUrl: './stage-base.component.html',
  styleUrls: ['./stage-base.component.scss']
})
export class StageBaseComponent implements OnInit {

  public beings = [

    ];

  constructor(public allItemsService: AllItemsService) { }

  ngOnInit() {
    this.beings.push(this.createPlayer(0, 200, {up: 'w', down: 's', right: 'd', left: 'a'}));
    this.beings.push(this.createPlayer(0, 500, {up: 'i', down: 'k', right: 'l', left: 'j'}));
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createPlatform(500, 100 * i));
    }
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createCoin(400, 100 * i));
    }
    // region trees
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 9) {
        this.beings.push(this.createTree(400, 100 * i));
      }
    }
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 9) {
        this.beings.push(this.createTree2(400, 100 * i));
      }
    }
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 9) {
        this.beings.push(this.createTree3(400, 100 * i));
      }
    }
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 8) {
        this.beings.push(this.createTree(300, 100 * i));
      }
    }
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 8) {
        this.beings.push(this.createTree2(300, 100 * i));
      }
    }
    for (let i = 0; i < 10; i++) {
      if (Math.random() * 10  > 8) {
        this.beings.push(this.createTree3(300, 100 * i));
      }
    }
    // region
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createOcean(300, 100 * i));
    }
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createSky(200, 100 * i));
    }
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createStars(100, 100 * i));
    }
    for (let i = 0; i < 10; i++) {
      this.beings.push(this.createSpace(0, 100 * i));
    }
}

public createPlayer(y, x, keys) {
  return {keys, type: 'player', zIndex: 111, top: y, left: x, backgroundColor: 'pink', src: 'assets/hero_idle.gif', src_idle: 'assets/hero_idle.gif', src_walking: 'assets/hero_walking.gif'};
}
public createCoin(y, x) {
  return {type: 'coin', top: y, left: x, src: 'assets/grass.png'};
}

  public createOcean(y, x) {
    return {type: 'coin', top: y, left: x, src: 'assets/ocean.jpeg'};
  }
  public createSky(y, x) {
    return {type: 'coin', top: y, left: x, src: 'assets/clouds1.jpg'};
  }
  public createPlatform(y, x) {
    return  {type: 'platform', top: y, left: x, src: 'assets/grass.png'};
  }
  public createSpace(y, x) {
    return  {type: 'coin', top: y, left: x, src: 'assets/space.jpg'};
  }
  public createStars(y, x) {
    return  {type: 'coin', top: y, left: x, src: 'assets/stars.jpg'};
  }
  public createTree(y, x) {
    return  {type: 'coin', top: y, left: x, src: 'assets/tree.png', zIndex: 111,};
  }
  public createTree2(y, x) {
    return  {type: 'coin', top: y, left: x, src: 'assets/tree2.png', zIndex: 111,};
  }
  public createTree3(y, x) {
    return  {type: 'coin', top: y, left: x, src: 'assets/tree3.png', zIndex: 111,};
  }
}
