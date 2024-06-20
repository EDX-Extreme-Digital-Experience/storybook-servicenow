interface ISearch {
    State: 'Default' | 'Hover' | 'Active' | 'Disabled',
    DoubleIcon: boolean,
    RightIcon: boolean,
    Placeholder: string,
    SearchPlaceholder: string,
    Scale: 'Default' | 'Compact' | 'Expanded',
    Shape: 'Default' | 'Rounded' | 'Sharp',
}

export default ISearch