import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dic-page',
  templateUrl: './dic-page.component.html',
  styleUrls: ['./dic-page.component.css']
})
export class DicPageComponent implements OnInit {

  words: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.words = this.dictionaryService.findAll();
    console.log(this.dictionaryService.findAll());
  }

}
