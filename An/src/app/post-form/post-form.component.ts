import {Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  // Передаем наверх наш созданный пост в app.component.html и там, во время события onAdd, вызываем функцию, которая 
  // отрабатывает, еще раз поднимается наверх и меняет данные внутри нашего app 
  @ViewChild("myTitle", {static: false}) myTitleRef: ElementRef
  @ViewChild("myText", {static: false}) myTextRef: ElementRef

  title: string = ""
  text: string = ""

  focusTitle() {
    this.myTitleRef.nativeElement.focus()
  }

  focusText() {
    this.myTextRef.nativeElement.focus()
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title, text: this.text, id: Date.now()
      }
      this.onAdd.emit(post)
      // Передаем наверх наш созданный пост в app.component.html и там, во время события onAdd, вызываем функцию, которая 
      // отрабатывает, еще раз поднимается наверх и меняет данные внутри нашего app 

      this.title = ""
      this.text = ""
    }
  }
}
