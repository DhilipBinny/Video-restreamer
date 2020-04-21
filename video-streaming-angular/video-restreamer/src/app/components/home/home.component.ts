import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../util.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(readonly acroute : ActivatedRoute,readonly service :UtilService) { }


  ngOnInit() {
    this.backend_url = this.service.nodejs_backend_url
  }
  backend_url = ""

  cards = {
    // "" : 'http://68.206.231.90:8080/?action=stream',
    "(Panasonic HD)" : "http://60.34.20.107:8081/nphMotionJpeg?Resolution=640x480&Quality=Standard",
    "(Panasonic HD -1)":"http://36.53.199.53:8082/nphMotionJpeg?Resolution=640x480&Quality=Standard",
    "Talsu autotransports, AS - (Mobitix)" : "http://212.3.204.81:8001/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    // "(ChannelVision)" : "http://37.34.208.88:86/GetData.cgi?CH=1",
    "Finques Frigola" : "http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
  }

  openNewTab(url){
    let uri = `${this.backend_url}/video?stream_url=${url}`
    window.open(uri,"_blank")
  }

}
