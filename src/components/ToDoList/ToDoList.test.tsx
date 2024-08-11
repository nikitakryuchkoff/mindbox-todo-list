import { render, screen } from "@testing-library/react";
import ToDoList from ".";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import '@testing-library/jest-dom'

const testData = [{
    id: 1,
    text: 'string',
    completed: false
}]

describe('To do list component', () => {
    
    it('render with items', () => {
        render(
            <Provider store={store}>
                <ToDoList items={testData}/>
            </Provider>
        )
        expect(screen.getByTestId('todoList')).toBeInTheDocument()
    })  

    it('render without items', () => {
        render(
            <Provider store={store}>
                <ToDoList items={[]}/>
            </Provider>
        )
        expect(screen.queryByTestId('todoList')).toBeNull()
    })  
})
