import { Component, HostBinding  } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { UserService } from '../user.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        width: '1000px',
        opacity: 1,
        backgroundColor: '#63d86f '
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'LightGray'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

    trigger('showHide', [
      state('open', style({
        // height: '200px',
        // width: '1000px',
        opacity: 1,
        // backgroundColor: '#63d86f '
      })),
      state('closed', style({
        // height: '100px',
        opacity: 0,
        // backgroundColor: 'LightGray'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimationsComponent {
  constructor(private userservice:UserService) {}
  isOpen:boolean = true
  file: File
  fileLink:string
  loading:boolean = false
  
  toggle() {
    this.isOpen = !this.isOpen
  }

  upload() {
    this.userservice.upload(this.file).subscribe((data:any)=> {
      if(typeof data === 'object') {
        this.fileLink = data.link
        this.loading = !this.loading
      }    
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0]
  }
}
