import { Component } from '@angular/core';
import { Icard, Istd, istd } from './shared/model/abc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'myWork';
  
  // fnameValue! : string;
  // lnameValue! : string;
  // emailValue!: string;
  // contactValue! : string;

  // stdArray: Array<istd>= [
  //   {
  //     fname: "jhon",
  //     lname: "doe",
  //     email: "jhon@3242",
  //     contact: 12344
  //   },
  //   {
  //     fname: "jhon",
  //     lname: "doe",
  //     email: "jhon@3242",
  //     contact: 12344
  //   }
  // ]

  // onStdAdd(eve: Event) {
  //   let obj:istd = {
  //         fname: this.fnameValue,
  //         lname: this.lnameValue,
  //         email: this.emailValue,
  //         contact: +this.contactValue,
  //   }

  //   // console.log(obj)
  //   this.stdArray.push(obj);

  //   this.fnameValue='';
  //   this.lnameValue='';
  //   this.emailValue='';
  //   this.contactValue='';
  //   }


    //-------------------- card  --------------------//

    postsInfo : Array<Istd> = [
      {
       title: "11 I am angular developer",
       body: "11 my biggest interest in codeing",
      },
      {
        title: "22 I am angular developer",
        body: "22 my biggest interest in codeing",
      },
      {
        title: " 33 I am angular developer",
        body:  "33 my biggest interest in codeing",
      },
      {
        title: "11 I am angular developer",
        body: "11 my biggest interest in codeing",
       },
       {
         title: "22 I am angular developer",
         body: "22 my biggest interest in codeing",
       },
       {
         title: " 33 I am angular developer",
         body:  "33 my biggest interest in codeing",
       },
     
  ]

 
}
