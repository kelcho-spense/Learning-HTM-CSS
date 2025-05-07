# CSS Selectors

A CSS selector selects the HTML element(s) you want to style.

## CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)

## The CSS element Selector
The element selector selects HTML elements based on the element name.

```css
p {
  text-align: center;
  color: red;
}
```

## The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash `(#)` character, followed by the id of the element.
```css
#para1 {
  text-align: center;
  color: red;
}
```
_**Note: An id name cannot start with a number!**_

## The CSS class Selector
The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period `(.)` character, followed by the class name.
```css
.center {
  text-align: center;
  color: red;
}
```


## The CSS Universal Selector
The universal selector (*) selects all HTML elements on the page.
```css
* {
  text-align: center;
  color: blue;
}
```