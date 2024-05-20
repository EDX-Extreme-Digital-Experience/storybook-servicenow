interface ISearch {
    State: 'Default' | 'Hover' | 'Active' | 'Disabled',
    CloseIcon: boolean,
    SearchIcon: boolean,
    Placeholder: string,
    SearchPlaceHolder: string,
    Scale: 'Default' | 'Compact' | 'Expanded',
    Shape: 'Default' | 'Rounded' | 'Sharp',
}

export default ISearch