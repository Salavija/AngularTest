import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;


// h1Style: boolean = false;
// creating instance of dependency injection
// to access methods from data service
  constructor(private data: DataService) { }

//angular live cycle hook
  ngOnInit() {
    this.data.getUsers().subscribe(data =>
      {
        this.users = data
        console.log(this.users)
      })
  }
// paprastas variantas home mygtuko keitimui
  // firstClick() {
  //   this.h1Style = true;
  // }

  // firstClick() {
  //   this.data.firstClick();
  // }
}

// (focus) = "myMethod()"
//   (blur) = "myMethod()"
//     (submit) = "myMethod()"
//       (scroll) = "myMethod()"

//         (cut) = "myMethod()"
//           (copy) = "myMethod()"
//             (paste) = "myMethod()"

//               (keydown) = "myMethod()"
//                 (keypress) = "myMethod()"
//                   (keyup) = "myMethod()"

//                     (mouseenter) = "myMethod()"
//                       (mousedown) = "myMethod()"
//                         (mouseup) = "myMethod()"

//                           (click) = "myMethod()"
//                             (dblclick) = "myMethod()"

//                               (drag) = "myMethod()"
//                                 (dragover) = "myMethod()"
//                                   (drop) = "myMethod()"
