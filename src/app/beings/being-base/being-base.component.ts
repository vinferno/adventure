import {Component, OnInit, HostListener, Input, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {KeyService} from '../../services/key.service';
import {GameClockService} from '../../game-clock.service';
import {AllItemsService} from '../../services/all-items.service';

@Component({
  selector: 'vf-being-base',
  templateUrl: './being-base.component.html',
  styleUrls: ['./being-base.component.scss'],
})
export class BeingBaseComponent implements OnInit {

  @Input()
  public being;

  @Input()
  public id;

  public look;
  public startTime = 4;

  public beingState;

  constructor(
    public fb: FormBuilder,
    public keyService: KeyService,
    public gameClock: GameClockService,
    public allItemsService: AllItemsService,
  ) {
  }

  ngOnInit() {
    this.allItemsService.add(this);
    // -----------------------------------
    this.beingState = this.fb.group({
      movingRight: false,
      movingLeft: false,
      movingUp: false,
      movingDown: false,
      speed: 4,
      gravity: 4,
      x: Number(this.being.left),
      y: Number(this.being.top),
      height: 100,
      width: this.being.width ? this.being.width : 100,
      jump: null,
      jumpHeight: -200,
      src: this.being.src,
      src_idle: this.being.src_idle,
      src_walking: this.being.src_walking,
    });
    this.look = this.fb.group({
      display: 'inline-block',
      position: 'absolute',
      color: 'yellow',
      height: '100px',
      width: '100px',
      left: this.being.left + 'px',
      top: this.being.top + 'px',
      transform: 'scaleX(-1)',
      overflow: 'hidden',
      'z-index': this.being.zIndex ? this.being.zIndex : 0,
    });

    // -----------------------------------
    this.keyService.pressed.subscribe(key => {
      if (!key || this.being.type === 'platform' || !this.being.keys) {
        return;
      }

      if (key.key === this.being.keys.right) {
        this.beingState.get('movingRight').setValue(true);
      }

      if (key.key === this.being.keys.left) {
        this.beingState.get('movingLeft').setValue(true);
      }
      if (key.key === this.being.keys.down) {
        this.beingState.get('movingDown').setValue(true);
      }
      if (key.key === this.being.keys.up) {
        if (!this.beingState.value.jump && !this.beingState.value.movingUp) {
          this.beingState.get('jump').setValue(this.beingState.value.y);
          this.beingState.get('movingUp').setValue(true);
        } else {
          console.log('denied', this.beingState.value.jump);
        }
      }
    });

    this.keyService.up.subscribe(key => {
      if (!key || this.being.type === 'platform' || !this.being.keys) {
        return;
      }

      if (key.key === this.being.keys.right) {
        this.beingState.get('movingRight').setValue(false);
      }

      if (key.key === this.being.keys.left) {
        this.beingState.get('movingLeft').setValue(false);
      }
      if (key.key === this.being.keys.down) {
        this.beingState.get('movingDown').setValue(false);
      }
      if (key.key === this.being.keys.up) {
        // this.beingState.get('movingUp').setValue(false);
      }
    });


    // -----------------------------------
    this.gameClock.clock.subscribe((time) => {

      if (this.being.type !== 'player') {
        return;
      }

      if (time > this.startTime) {
        let top = this.beingState.value.gravity;
        this.beingState.value.movingUp ? top += -(this.beingState.value.gravity + this.beingState.value.speed) : top += 0;
        this.beingState.value.movingDown ? top = this.beingState.value.speed : top += 0;
        let left = 0;
        this.beingState.value.movingLeft ? left += -this.beingState.value.speed : left += 0;
        this.beingState.value.movingRight ? left += this.beingState.value.speed : left += 0;

        let xBlocked = false;
        let yBlocked = false;
        let angleBlocked = false;
        this.allItemsService.items.forEach(item => {
          if (item.id === this.id) {
            return;
          }
          if (this.beingState.value.y < this.beingState.value.jump + this.beingState.value.jumpHeight) {
            this.beingState.get('movingUp').setValue(false);
          }
          if (this.beingState.value.x + left < item.beingState.value.x + item.beingState.value.width &&
            this.beingState.value.x + left + this.beingState.value.width > item.beingState.value.x &&
            this.beingState.value.y + top < item.beingState.value.y + item.beingState.value.height &&
            this.beingState.value.height + top + this.beingState.value.y > item.beingState.value.y) {
            if (item.being.type === 'platform') {
              angleBlocked = true;
            }
            // collision support!
          }
          if (this.beingState.value.x + left < item.beingState.value.x + item.beingState.value.width &&
            this.beingState.value.x + left + this.beingState.value.width > item.beingState.value.x &&
            this.beingState.value.y < item.beingState.value.y + item.beingState.value.height &&
            this.beingState.value.height + this.beingState.value.y > item.beingState.value.y) {
            // collision support!
            if (item.being.type === 'platform') {
              xBlocked = true;
            }
          }
          if (this.beingState.value.x < item.beingState.value.x + item.beingState.value.width &&
            this.beingState.value.x + this.beingState.value.width > item.beingState.value.x &&
            this.beingState.value.y + top < item.beingState.value.y + item.beingState.value.height &&
            this.beingState.value.height + top + this.beingState.value.y > item.beingState.value.y) {
            // collision support!
            if (item.being.type === 'platform') {
              yBlocked = true;
            }
          }
        });
        if (!angleBlocked) {
          this.moveLeft(left);
          this.moveTop(top);
        } else if (!xBlocked) {
          this.moveLeft(left);
        } else if (!yBlocked) {
          this.moveTop(top);
        }
        if (yBlocked) {
          this.beingState.get('jump').setValue(null);
          this.beingState.get('movingUp').setValue(false);
        }

      }
    });
  }


  // -----------------------------------

  public getMyLook() {
    const style = {...this.look.value, ...{left: this.beingState.value.x + 'px', top: this.beingState.value.y + 'px'}};
    return style;
  }

  // -----------------------------------
  public moveTop(top) {

    if (top === 0) {
      this.being.src = this.being.src_idle;
    }
    if (top < 0) {
      if (top < -this.beingState.value.speed && top < -this.beingState.value.gravity) {
        return;
      }
    }
    if (top > 0) {
      if (top > this.beingState.value.speed && top > this.beingState.value.gravity) {
        return;
      }
    }
    this.beingState.get('y').setValue(this.beingState.get('y').value + top);
  }

  public moveLeft(left) {
    if (left === 0) {
      this.being.src = this.being.src_idle;
    } else {
      this.being.src = this.being.src_walking;
    }
    if (left < 0) {
      if (left < -this.beingState.value.speed) {
        this.beingState.get('x').setValue(this.beingState.get('x').value - 1);
        console.log('left failed', left);
        return;
      }
      this.look.get('transform').setValue('scaleX(-1)');
    }
    if (left > 0) {
      if (left > this.beingState.value.speed) {
        this.beingState.get('x').setValue(this.beingState.get('x').value - 1);
        console.log('left failed 2', left);
        return;
      }
      this.look.get('transform').setValue('scaleX(1)');
    }
    this.beingState.get('x').setValue(this.beingState.get('x').value + left);
  }

  // -----------------------------------


}
