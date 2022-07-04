import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  categorias: string[] = ['Seleccione categoria', 'Bebidas', 'Comidas', 'Tecnologia', ]
  category = "Seleccione categoria";

  myForm!: FormGroup;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

getCategoria(){
  switch (this.category){
    case 'Bebidas':
      this.route.navigate(['/bebidas'])
      break;
    case 'Comidas':
      this.route.navigate(['/comida'])
      break;
    case 'Tecnologia':
      this.route.navigate(['/tecnologia'])
      break;
  }
}

}
