import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clipchamp-element',
  templateUrl: './clipchamp-element.component.html',
  styleUrls: ['./clipchamp-element.component.scss']
})
export class ClipchampElementComponent implements OnInit {
  @Input()
  public label: string;

  @Input()
  public size: string;

  @Input()
  public title: string;

  @Input()
  public color: string;

  ngOnInit() {
    
  }
}

  // var el = document.querySelector("#clipchamp-button");
  // var options = {
  //     output: "youtube",
  //       style: {
  //           url:   "https://api.clipchamp.com/static/button/themes/modern-dark.css"
  //      }
  // };
  // clipchamp(el, options);
  //
