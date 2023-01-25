import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos:Todo[] | undefined;
  inputTodo:string="";
  constructor(){}
  
  ngOnInit(): void {
    this.todos = [
      {
        content:'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
    
  }
  toggleDone(id: number){
this.todos?.map((v,i)=>{
  if (i==id) v.completed =! v.completed;
  return v;
})

  }

  deleteTodo(id: number){
    this.todos= this.todos!.filter((v,i)=> i !== id); //this.todos had issue, The issue is that the this.todos variable is declared as Todo[] | undefined which means that it can either be an array of Todo objects or undefined. The filter method can only be called on an array, so when this.todos is undefined, the code will throw an error.
    //You can solve this issue by using the "non-null assertion operator" (!) after the this.todos variable to tell the TypeScript compiler that you know that this.todos is not undefined.
  }
  addTodo(){
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo="";
  }
}
