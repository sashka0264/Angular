import {
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostComponent implements OnInit, OnChanges {

  @Input() post: Post
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges):void {}

  removePost() {
    this.onDelete.emit(this.post.id)
  }
}