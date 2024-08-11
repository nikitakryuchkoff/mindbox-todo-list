import { render, screen } from "@testing-library/react";
import ToDoListItem from ".";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import '@testing-library/jest-dom'

const testData = {
    text: 'string',
    id: 1,
    completed: false
}

describe('To do list component', () => {
    
    it('render with items', () => {
        render(
            <Provider store={store}>
                <ToDoListItem {...testData}/>
            </Provider>
        )
        expect(screen.getByTestId('todolistitem')).toBeInTheDocument()
    })  


})
