import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-avec-parametre',
  templateUrl: './route-avec-parametre.component.html',
  styleUrls: ['./route-avec-parametre.component.scss']
})
export class RouteAvecParametreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      alert(params.code);
    })

  }

}
