import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallel-graph',
  templateUrl: './parallel-graph.component.html',
  styleUrls: ['./parallel-graph.component.scss']
})
export class ParallelGraphComponent implements OnInit {

 graph = {
   data : [{
     type: 'parcats',
     dimensions: [
       {label: 'Hair',
         values: ['Black', 'Brown', 'Brown', 'Brown', 'Red', 'Red', 'Yellow', 'Green', 'Yellow', 'Yellow' ]},
       {label: 'Eye',
         values: ['Brown', 'Brown', 'Brown', 'Blue', 'Blue', 'Blue', 'Green', 'Yellow', 'Green', 'Green']},
       {label: 'Sex',
         values: ['Female', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Female']}],
     counts: [6, 10, 40, 23, 7, 30, 15, 14, 22, 32, 50]
   },
   ],
   layout : {width: 600}
 };
 graph1 = {
   data : [{
     type: 'parcoords',
     line: {
       color: 'blue'
     },

     dimensions: [{
       range: [1, 5],
       constraintrange: [1, 2],
       label: 'A',
       values: [1,4]
     }, {
       range: [1,5],
       label: 'B',
       values: [3,1.5],
       tickvals: [1.5,3,4.5]
     }, {
       range: [1, 5],
       label: 'C',
       values: [2,4],
       tickvals: [1,2,4,5],
       ticktext: ['text 1','text 2','text 4','text 5']
     }, {
       range: [1, 5],
       label: 'D',
       values: [4,2]
     },
       {
         range: [1, 5],
         constraintrange: [1, 2],
         label: 'E',
         values: [1,4]
       }, {
         range: [1,5],
         label: 'F',
         values: [3,1.5],
         tickvals: [1.5,3,4.5]
       }, {
         range: [1, 5],
         label: 'G',
         values: [2,4],
         tickvals: [1,2,4,5],
         ticktext: ['text 1','text 2','text 4','text 5']
       }, {
         range: [1, 5],
         label: 'H',
         values: [4,2]
       },
     ]
   }],
 };
  constructor() { }

  ngOnInit(): void {
  }

}
