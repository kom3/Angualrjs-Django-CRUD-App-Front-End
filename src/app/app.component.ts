import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Title } from '@angular/platform-browser';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  movies=[{title:'test'}]
  
  selectedmovie;

   constructor(private api:ApiService){
    this.getMovies(); 
    this.selectedmovie={id:-1,title:'',desc:'',year:0}
   }
   getMovies =()=>{

      this.api.getAllMovies().subscribe(
        data=>{

        this.movies=data;
      },
        error=>{

        console.log(error);
      }
  
    ) //inside subscribe we have two things data=> { } and error=> {  }

   }




   //displaying movie discription below page and filling input fields on clicking;



   movieClicked=(movie)=>{

    
   
   
    this.api.getOneMovie(movie.id).subscribe(
      data=>{

        this.selectedmovie=data;

      },

      error=>{

        console.log(error)
      }
    )
    

   }

   updateMovieclicked= () =>{

     this.api.updateMovie(this.selectedmovie).subscribe(
     
      data=>{

        this.selectedmovie=data;
        this.getMovies();

      },

      error=>{

        console.log(error)
      }
    )
    

   }

   createMovie= () =>{

    this.api.CreateMovie(this.selectedmovie).subscribe(
    
     data=>{

       this.movies.push(data);
       this.getMovies();

     },

     error=>{

       console.log(error)
     }
   )
   

  }

   

  deleteMovie= () =>{

    this.api.DeleteMovie(this.selectedmovie.id).subscribe(
    
     data=>{

      this.getMovies();

     },

     error=>{

       console.log(error)
     }
   )
   

  }

}