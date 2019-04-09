import { Todo } from 'src/app/models/todo.model';

export class NewTodo {
	static readonly type = '[Todos] New Todo';
	constructor(public todo: Todo) {}
}

export class DeleteTodo {
	static readonly type = '[Todos] Delete Todo';
	constructor(public id: string) {}
}

export class UpdateTodo {
	static readonly type = '[Todos] Update Todo';
	constructor(public todo: Todo) {}
}
