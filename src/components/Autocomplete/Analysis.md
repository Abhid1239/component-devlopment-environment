---
Autocomplete Component
---

## Functional props

-   `options`: `{label: string, id: int}` (Required)
-   `text`: `string` (default: "")
-   `showMenu`: `boolean` (default: null)
-   `highlightText`: `boolean` (default: false)

## Static props

-   `placeholder`: `string` (default: "")
-   `disabled`: `boolean` (default: false)
-   `maxHeight`: `string` (default: "300px")
-   `inputPrefix`: `oneOf(arrow, searchIcon, none, node)` (default: none)
-   `isLoading`: `boolean` (default: false)
-   `showClear`: `boolean` (default: null)
-   `inputSuffix`: `oneOf(searchIcon, none, node)` (default: none)
-   `size`: `oneOf(sm, md, lg)` (default: md)
-   `inputRef`: `func` (default: null)
-   `isFocused`: `boolean` (default: false)
-   `align`: `oneOf(bottom/top)` (default: bottom)
-   `hasBorder`: `boolean` (default: true)
-   `noOptionsText`: `oneOf(string/node)` (default: No result msg)
-   `className`: `string` (default: "")
-   `inputClassName`: `string` (default: "")
-   `menuWrapperClassName`: `string` (default: "")

## Controlled props

-   `options`: `{label: string, id: int}`
-   `text`: `string`
-   `showMenu`: `boolean`
-   `isLoading`: `boolean`
-   `showClear`: `boolean`

## Event props

-   `onClick`: `func`
-   `onPrefixClick`: `func`
-   `onSuffixClick`: `func`
-   `onChange`: `func`
-   `onKeyDown`: `func`
-   `onKeyUp`: `func`
-   `onKeyPress`: `func`

```jsx
function Prefix(props) {
  return prefix;
}

function Input() {
  state => value;

  return (
    <input type="text" ...events />
  );
}

function Loader(props) {
  return loadingAnimation;
}

function ClearButton() {
  return clearButton;
}

function Suffix(props) {
  return suffix;
}

function MenuWrapper(props) {
  if (highlightText) {
    highlight matched string part with inputValue;
  }

  return map menu items and return if shouldShowMenu is true;
}

function Autocomplete(props) {
  state => inputValue (defaultText) update on onChange, shouldShowMenu (showMenu) update onFocus, onBlur, onMenuItemClick;

  global variable = filterOptions(options);

  filterLogic on debounced onChange (timing 300-500ms) => iterate options and add includes check;

  return (
    <Container hasBorder className>
      <div class="wrapper">
        <Prefix inputPrefix size />
        <Input value={inputValue} placeholder disabled size inputRef isFocused inputClassName ...event />
        <Loader isLoading size />
        <ClearButton size />
        <Suffix inputSuffix size />
      </div>
      <MenuWrapper shouldShowMenu options={filterOptions} highlightText inputValue maxHeight size align noOptionsText menuWrapperClassName />
    </Container>
  );
}
```
