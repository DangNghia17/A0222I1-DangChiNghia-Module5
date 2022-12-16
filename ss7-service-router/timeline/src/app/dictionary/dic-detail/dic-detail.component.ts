import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dic-detail',
  templateUrl: './dic-detail.component.html',
  styleUrls: ['./dic-detail.component.css']
})
export class DicDetailComponent implements OnInit {

  wordDetail: Dictionary ;

  constructor(private activeRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordDetail.id = +this.activeRoute.snapshot.params['id'];
    // this.wordDetail.id = +this.activeRoute.snapshot.paramMap.get('id');

    // this.activeRoute.paramMap.subscribe(data => {
    //   console.log('param' + data.get('i'));
    // });
    console.log(this.wordDetail.id);
  }
}
