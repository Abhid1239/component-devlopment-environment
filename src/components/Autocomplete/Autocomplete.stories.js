import Autocomplete from "./Autocomplete";

var options = [
    { label: 'option0', id: 0 },
    { label: 'option1', id: 1 },
    { label: 'option2', id: 2 },
    { label: 'option3', id: 3 },
    { label: 'option4', id: 4 },
    { label: 'option5', id: 5 },
    { label: 'option6', id: 6 },
    { label: 'option7', id: 7 },
    { label: 'option8', id: 8 },
    { label: 'option9', id: 9 },
    { label: 'option10', id: 10 },
    { label: 'option11', id: 11 },
    { label: 'option12', id: 12 },
    { label: 'option13', id: 13 },
    { label: 'option14', id: 14 },
    { label: 'option15', id: 15 },
    { label: 'option16', id: 16 },
    { label: 'option17', id: 17 },
    { label: 'option18', id: 18 },
    { label: 'option19', id: 19 },
    { label: 'option20', id: 20 },
    { label: 'option21', id: 21 },
    { label: 'option22', id: 22 },
    { label: 'option23', id: 23 },
    { label: 'option24', id: 24 },
    { label: 'option25', id: 25 },
    { label: 'option26', id: 26 },
]

export default {
    title: 'Example/Autocomplete',
    component: Autocomplete,
};

export const Default = {
    args: {
        text: "",
        placeholder: 'Enter text',
        disabled: false,
        inputPrefix: "",
        inputSuffix: "",
        maxHeight: '244px',
        noOptionText: 'No result found!',
        className: '',
        inputClassName: '',
        menuWrapperClassName: '',
        isLoading: false,
        showMenu: false,
        onClearClick: () => { console.log("Clear Click") },
        onChange: (_, text) => { console.log("onChange", text) },
        onResultClick: () => { console.log("Result Click") },
        options: options,
    },
};
