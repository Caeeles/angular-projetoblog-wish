import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover:string ="https://eoszsmvknnh.exactdn.com/wp-content/uploads/2023/12/Genshin-Impact-Ascensao-do-personagem-Neuvillette-e-materiais.jpg?strip=all&lossy=1&ssl=1"

  @Input()
  cardTitle:string ="Aparece"

  @Input()
  Id:string ="0"

}
