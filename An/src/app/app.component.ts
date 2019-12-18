import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: "Hello", text: "Some text 1", id: 1},
    {title: "Bay", text: "Some text 2", id: 2}
  ]

  ngOnInit():void {
    setTimeout(() => {
      console.log("ngOnInit")
      this.posts[0].title = "Changed!"
    }, 5000) 
  }

  updatePosts(post: Post) {
    this.posts = [post, ...this.posts]
  }

  deletePost(id) {
    this.posts = this.posts.filter((item) => item.id !== id)
  }
}
