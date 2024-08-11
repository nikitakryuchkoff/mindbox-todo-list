export interface IToDoItem {
    id: number,
    text: string,
    completed: boolean
}

export interface IToDoList {
    items: Array<IToDoItem>
}

export interface IChange{
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export interface IChildren  { 
    children: Array<JSX.Element>,
}

export interface IFooter {
    setFilteredItems: React.Dispatch<React.SetStateAction<IToDoItem[]>>
}

export interface IState {
    items: any[]
}

export interface IToDoListItem {
    text: string,
    id: number,
    completed: boolean
}


export interface IAddItemAction {
    type: string
    payload: string
}

export interface IDeleteItemAction {
    type: string
    payload: number
}

export interface IMakeCompletedItemAction {
    type: string
    payload: {
        id: number
        completed: boolean | undefined
    }

}