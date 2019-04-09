import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { Todo } from 'src/app/models/todo.model';
import { NewTodo, DeleteTodo, UpdateTodo } from './todo.actions';

export interface TodoStateModel {
	todos: {
		[key: string]: Todo;
	};
}

@State<TodoStateModel>({
	name: 'todos',
	defaults: {
		todos: {},
	},
})
export class TodoState {
	// Selectors
	// ----------------------------------------------------
	@Selector()
	static getTodos(state: TodoStateModel) {
		return Object.keys(state.todos).map(id => state.todos[id]);
	}

	static getTodoById(id: string) {
		return createSelector(
			[TodoState],
			(state: TodoStateModel) => state.todos[id]
		);
	}

	// Actions
	// ----------------------------------------------------
	@Action(NewTodo)
	newTodo(ctx: StateContext<TodoStateModel>, { todo }: NewTodo) {
		const state = ctx.getState();
		ctx.patchState({
			todos: { ...state.todos, [todo.id]: todo },
		});
	}

	@Action(DeleteTodo)
	deleteTodo(ctx: StateContext<TodoStateModel>, { id }: DeleteTodo) {
		const state = ctx.getState();
		const { [id]: deleted, ...todos } = state.todos;
		ctx.patchState({ todos });
	}

	@Action(UpdateTodo)
	updateTodo(ctx: StateContext<TodoStateModel>, { todo }: UpdateTodo) {
		const state = ctx.getState();
		ctx.patchState({
			todos: { ...state.todos, [todo.id]: todo },
		});
	}
}
