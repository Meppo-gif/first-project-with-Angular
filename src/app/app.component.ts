import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // hh : mm : ss
  title = 'time';
  h:string = ''; //variable representant l'heuire actuelle
  m:string = ''; //variable reprensentant la minute actuelle
  s:string = ''; //variable representant la seconde actuelle

  gc:any;

  private afficherHeure()
  {
   const heure = new Date(Date.now());
   this.h = this.formatTime(heure.getHours().toString());
   this.m = this.formatTime(heure.getMinutes().toString());
   this.s = this.formatTime(heure.getSeconds().toString());  
  }

  private mettreAjour()
  {
    setInterval( ()=>{
      this.afficherHeure();
    },1000)
  }

  ngOnInit()
  {
    this.afficherHeure();
    this.gc= this.mettreAjour();
  }

  ngOnDestroy()
  {
    clearInterval(this.gc);
  }

  private formatTime(n:any)
  {
    if(n<10) return '0' +n.toString();
    else return n.toString();
  }
}

