import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent implements OnInit {
  
  searchForm = this.fb.nonNullable.group({ searchValue: '' });

  @Output() searchSubmit = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const searchValue = this.searchForm.value.searchValue ?? '';
    this.searchSubmit.emit(searchValue);
  }

  ngOnInit(): void {}
}
