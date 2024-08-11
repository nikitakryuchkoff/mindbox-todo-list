import { render, screen } from "@testing-library/react";
import Input from ".";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

const onChange = jest.fn()


describe('Input component', () => {
    
    it('input render', () => {
        render(
            <Provider store={store}>
                <Input value={''} onChange={onChange}/>
            </Provider>
        )
        expect(screen.getByTestId('todoinput')).toBeInTheDocument()

    })  

    it('input changes value', () => {
        render(
            <Provider store={store}>
                <Input value={''} onChange={onChange}/>
            </Provider>
        )
        userEvent.type(screen.getByTestId('todoinput'), 'react')
        expect(onChange).toHaveBeenCalledTimes(5)
    })  
})
