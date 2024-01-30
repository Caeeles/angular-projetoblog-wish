import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string ='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e11a0b59-6078-4414-ac91-be7ca5fe6032/d551w2j-332c4179-7cb8-48d7-aac8-16022d786013.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxMWEwYjU5LTYwNzgtNDQxNC1hYzkxLWJlN2NhNWZlNjAzMlwvZDU1MXcyai0zMzJjNDE3OS03Y2I4LTQ4ZDctYWFjOC0xNjAyMmQ3ODYwMTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ovn_ujG-Nl5c6rbTqgkoFjo7YjgwZKnQFoG_dAABjNY'
  contentTitle:string ='Minha Noticia'
  contentDescription:string ='Olá mundo'
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

  this.contentTitle = result.title
  this.contentDescription = result.description
  this.photoCover = result.photoCover
  }
}
