import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../util.service'

@Component({
  selector: 'app-try-url',
  templateUrl: './try-url.component.html',
  styleUrls: ['./try-url.component.css']
})
export class TryUrlComponent implements OnInit {

  constructor(readonly service :UtilService) { }

  ngOnInit() {
    this.backend_url = this.service.nodejs_backend_url
  }

  backend_url = ""

  video_src =""

  inputValue =""

  loadUrl(img){
    console.log(img)
    img.src=""
    this.video_src = ""
    let uri = `${this.backend_url}/video?stream_url=${this.inputValue}`
    console.log(this.inputValue)
    this.video_src = uri

  }

}
