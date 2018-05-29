import { Component, OnInit, Input, Output } from '@angular/core';
declare const clipchamp;
declare global {interface Window { clipchampImport: any; }}

@Component({
  selector: 'clipchamp-element',
  templateUrl: './clipchamp-element.component.html',
  styleUrls: ['./clipchamp-element.component.scss']
})
export class ClipchampElementComponent implements OnInit {
  //Proof on concept that variables work, more can be added if needed
  @Input()
  public label: string;

  @Input()
  public logo: string;

  @Input()
  public title: string;

  // @Input()
  // public apiKey: string;
  
  get clipchampOptions() {
    return {
      title: this.title,
      logo: this.logo,
      label: this.label,
    };
  }

  //Script to be injected
  injectScript() {
    var script = document.createElement('script');
    script.onload = function() {
      window.clipchampImport = clipchamp(this.clipchampOptions);
    }.bind(this);
    script.src = 'https://api.clipchamp.com/NAJv9PRj1VqeoDB9ijt6f9u7-pg/button.js';
    document.head.appendChild(script);
  }

  //Show the clipchamp iframe when button is clicked
  onClick() {
    window.clipchampImport.open();
  }

  ngOnInit() {
    //Wait till conent loaded then inject script
    document.addEventListener("DOMContentLoaded", function(event) {
        this.injectScript();
    }.bind(this))
  }
}
