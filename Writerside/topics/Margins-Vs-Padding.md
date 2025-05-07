# Margins Vs Padding

## CSS Margins
The CSS `margin` properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (`top, right, bottom, and left`).

CSS has properties for specifying the margin for each side of an element:

* margin-top
* margin-right
* margin-bottom
* margin-left

All the margin properties can have the following values:

* auto - the browser calculates the margin
* length - specifies a margin in px, pt, cm, etc.
* % - specifies a margin in % of the width of the containing element
* inherit - specifies that the margin should be inherited from the parent element

```CSS
p {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
}
```
### Margin - Shorthand Property

The margin property is a shorthand property for the following individual margin properties:

```css
p {
  margin: 25px 50px 75px 100px;
}
```
* top margin is 25px
* right margin is 50px
* bottom margin is 75px
* left margin is 100px

## CSS Padding
Padding is used to create space around an element's content, inside of any defined borders.

### Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:

1. padding-top
2. padding-right
3. padding-bottom
4. padding-left

All the padding properties can have the following values:

* length - specifies a padding in px, pt, cm, etc.
* % - specifies a padding in % of the width of the containing element
* inherit - specifies that the padding should be inherited from the parent element

### Padding - Shorthand Property
The padding property is a shorthand property for the following individual padding properties:
```CSS
div {
  padding: 25px 50px 75px 100px;
}
```
* top padding is 25px
* right and left paddings are 50px
* bottom padding is 75px