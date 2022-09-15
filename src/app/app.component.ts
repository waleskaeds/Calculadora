import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  msg : string = '0';
  numAtual = '';

  public aparecer(value: string){
     this.numAtual += value
     this.msg = this.numAtual
  }

  public conta(){
    this.msg = eval(this.numAtual)
    this.numAtual = this.msg
  }

  public limpar(){
    this.numAtual = ''
    this.msg = this.numAtual
  }
}
