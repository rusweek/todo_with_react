import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css"

export default class App extends Component {

    constructor(){
        super();

        this.maxId = 100;

        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make awesome App'),
                this.createTodoItem('Have a lunch'),

            ],
            term: ''
        };



        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);

            this.setState(({todoData})=>{
                const todoDataSt = [...todoData, newItem];
                return {
                    todoData: todoDataSt
                }
            });
        };

        this.onToggleImportant = (id) => {
            this.setState(({todoData})=>{
                return{
                    todoData: this.toggleProperty(todoData, id, 'important')
                };
            });


        };

        this.onToggleDone = (id) => {
            this.setState(({todoData})=>{
                  return{
                    todoData: this.toggleProperty(todoData, id, 'done')
                };
            });
        };



        this.deleteItem = (id) => {
            this.setState(({todoData})=>{
                // const idx = todoData.findIndex((el) => el.id === id); //idx = indexArray ->[0, 1, 2, ...]
                // const newArr = [...todoData.spice(0, idx), ...todoData.splice(idx + 1)];
                // return {
                //     todoData: newArr
                // }
                const todoDataSt = todoData.filter((el)=> el.id !== id);
                return {
                    todoData: todoDataSt
                }
            });

        };

        this.search = (todoData, term) => {

            if(term.length === 0) {return todoData;};

            return todoData.filter((el)=> {
                return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        };

        this.onSearchChange = (term) => {
            this.setState({term});
        };
    }

    toggleProperty(arr, id, propName){

            const oldItemArr = arr.filter(el => el.id === id);
            const oldItem = oldItemArr[0];
            const todoDataSt = {...oldItem, [propName]: !oldItem[propName]};
            return arr.map(el => {return el = el.id === id ? todoDataSt : el;});

            // const idx = arr.findIndex(el => el.id === id);
            // const oldItem = arr[idx];
            // const newItem = {...oldItem, [propName]: !oldItem[propName]};
            //
            // return [
            //     ...arr.slice(0, idx),
            //     newItem,
            //     ...arr.slice(idx + 1)
            // ];

    }


    createTodoItem(label){
        return{
            label: label,
            done:false,
            important: false,
            id: this.maxId++
        }
    };

    render() {
        const {todoData, term } = this.state;

        const visibleItems = this.search (todoData, term);
        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;


        return (
            <div className="todo-app col-8">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = {this.onSearchChange} />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={visibleItems} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant}
                          onToggleDone = {this.onToggleDone}/>
                <ItemAddForm onItemAdded = {this.addItem} />
            </div>
        );
    }


};

