import { Component,  Input,  OnInit } from '@angular/core';
import { Icard } from '../../model/abc';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input() cardInfo! : Icard

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardInfo)
  }

}
