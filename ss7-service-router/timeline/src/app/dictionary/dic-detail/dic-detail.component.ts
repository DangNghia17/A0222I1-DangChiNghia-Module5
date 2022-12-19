import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dic-detail',
  templateUrl: './dic-detail.component.html',
  styleUrls: ['./dic-detail.component.css']
})
export class DicDetailComponent implements OnInit {

  wordDetail: Dictionary = {
    id: 10,
    word: 'none',
    meaning: 'none'
  };

  constructor(private activeRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    // this.wordDetail.id = +this.activeRoute.snapshot.params['id'];
    this.wordDetail.id = +this.activeRoute.snapshot.paramMap.get('id');
      this.wordDetail = this.dictionaryService.findById(this.wordDetail.id);


    // this.activeRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.wordDetail.id = +params.get('id');
    //   this.wordDetail = this.dictionaryService.findById(this.wordDetail.id);
    // });
    console.log(this.wordDetail.id);
  }
}
