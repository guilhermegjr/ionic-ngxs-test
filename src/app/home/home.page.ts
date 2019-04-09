import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { NewTodo } from '../store/todos/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoState } from '../store/todos/todo.state';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	title: string;
	@Select(TodoState.getTodos) todos$: Observable<Todo>;

	constructor(private store: Store) {}

	addTodo() {
		this.store
			.dispatch(
				new NewTodo({
					id: new Date().getTime().toString(),
					title: this.title,
					finished: false,
				})
			)
			.subscribe(result => (this.title = ''));
	}
}
