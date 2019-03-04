import { Component, OnInit } from '@angular/core';
import {HostnameService} from '../../hostname.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  elementType: 'url' | 'canvas' | 'img' = 'url';
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  techiediaries = 'https://www.npmjs.com/~techiediaries';
  letsboot = 'https://www.letsboot.com/';
  oururl:string;
  host:string;
  code:string;

  constructor(private hostname: HostnameService) {
    this.code='';
   }

  ngOnInit() {
    this.host=this.hostname.getHostname().concat('/res/');
  }

  addCode(){
    this.oururl=this.host+this.code;
    console.log(this.oururl,this.code.length==0);

  }

}