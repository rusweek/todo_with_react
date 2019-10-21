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
                {label: 'Drink Coffee', important: false, id: 1},
                {label: 'Make awesome App', important: true, id: 2},
                {label: 'Have a lunch', important: false, id: 3}
            ]
        };

        this.addItem = (text) => {
            const newItem = {
                label: text,
                important: false,
                id: this.maxId++
            };

            this.setState(({todoData})=>{
                const todoDataSt = [...todoData, newItem];
                return {
                    todoData: todoDataSt
                }
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

        }
    }

    render() {

        const {todoData} = this.state;
        return (
            <div className="todo-app col-8">
                <AppHeader toDo={1} done={0} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={todoData} onDeleted={this.deleteItem}/>
                <ItemAddForm onItemAdded = {this.addItem} />
            </div>
        );
    }


};

