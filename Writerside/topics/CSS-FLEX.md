# CSS Flexbox

The Flexbox Layout (Flexible Box) module (a [W3C Candidate Recommendation](https://www.w3.org/TR/css-flexbox/) as of October 2017) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

* Flexbox is short for the Flexible Box Layout module. 
* Flexbox is a layout method for arranging items in rows or columns. 
* Flexbox makes it easier to design a flexible responsive layout structure, without using float or positioning.


## CSS Flexbox Components
A flexbox always consists of:
1. a **`Flex Container`** - the parent (`container`) `<div>` element
2. **`Flex Items`** - the `items inside` the container `<div>`

## Flexbox Properties:
### **display: flex;**

![image_18.png](image_18.png)
```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>Create a Flex Container</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>

<p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>

<p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p>

</body>
</html>
```
* The `.flex-container` becomes a flex container with three direct child `div` elements (flex items). 
* These `div` elements will be displayed in a row (default behavior of Flexbox).
## flex-direction
The `flex-direction` property specifies the display-direction of flex items in the flex container.

The flex-direction property can have one of the following values:

1. `row`
2. `column`
3. `row-reverse`
4. `column-reverse`

* The **`row`** value is the default value, and it displays the `flex items horizontally` (from left to right):
```CSS
.flex-container {
  display: flex;
  flex-direction: row;
}
```
![image_19.png](image_19.png)

* The **`column`** value displays the `flex items vertically` (from top to bottom):
```CSS
.flex-container {
  display: flex;
  flex-direction: column;
}
```
![image_20.png](image_20.png)

* The **`row-reverse`** value displays the `flex items horizontally` (but from right to left):
```CSS
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```
![image_21.png](image_21.png)

* The **`column-reverse`** value displays the flex items vertically (but from bottom to top):

## justify-content

The `justify-content` property is used to align the flex items along the **main axis** (default is horizontal).
The justify-content property can have one of the following values:

1. `flex-start`: Aligns items to the start of the container (default).
2. `flex-end`: Aligns items to the end of the container.
3. `center`: Aligns items to the center.
4. `space-between`: Distributes items with equal space between them.
5. `space-around`: Distributes items with equal space around them.
6. `space-evenly`: Distributes items with equal space between and around them.

* The `space-between` value displays the flex items with space between them:
![image_22.png](image_22.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox - justify-content</title>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between; /* Distribute space between items */
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
    }
  </style>
</head>
<body>

<h1>Flexbox - justify-content</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>
```

* The `space-evenly` value displays the flex items with equal space around them:
![image_23.png](image_23.png)

* The `space-around` value displays the flex items with space around them:
![image_24.png](image_24.png)

* The `flex-end` value positions the flex items at the end of the container:
![image_25.png](image_25.png)

* The `flex-start` value positions the flex items at the beginning of the container (this is default):
![image_26.png](image_26.png)

* The `center` value positions the flex items in the center of the container:
![image_27.png](image_27.png)

---

### **align-items**

The `align-items` property is used to align the flex items along the **cross axis** (perpendicular to the main axis, default is vertical).

#### Example : Aligning Flex Items Vertically

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox - align-items</title>
  <style>
    .flex-container {
      display: flex;
      align-items: center; /* Align items vertically */
      height: 200px;
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
    }
  </style>
</head>
<body>

<h1>Flexbox - align-items</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>
```

#### `align-items` Values:

* `flex-start`: Aligns items to the start of the cross axis.
![image_28.png](image_28.png)
* `flex-end`: Aligns items to the end of the cross axis.
![image_29.png](image_29.png)
* `center`: Aligns items to the center of the cross axis.
![image_32.png](image_32.png)
* `baseline`: Aligns items to their baseline (useful for text).
![image_31.png](image_31.png)
* `stretch`: Stretches items to fill the container (default).
![image_30.png](image_30.png)

---

###  **flex-wrap**

By default, flex items will try to fit into one line. The `flex-wrap` property controls whether items should wrap to the next line if there’s not enough space.

#### Example : Wrapping Flex Items

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox - flex-wrap</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap; /* Allow wrapping */
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
      flex: 1 1 100px; /* Allow the items to shrink or grow */
    }
  </style>
</head>
<body>

<h1>Flexbox - flex-wrap</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

</body>
</html>
```

#### `flex-wrap` Values:

* `nowrap` (default): Items will not wrap, they will overflow.
* `wrap`: Items will wrap onto the next line.
* `wrap-reverse`: Items will wrap onto the next line in reverse order.

---

###  **flex-grow, flex-shrink, flex-basis**

These properties control how the flex items grow, shrink, or have a fixed size.

#### Example : Flexible Items with Grow, Shrink, and Basis

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox - flex-grow, flex-shrink, flex-basis</title>
  <style>
    .flex-container {
      display: flex;
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
      flex-grow: 1; /* Allow items to grow */
    }

    .flex-container > div:first-child {
      flex-grow: 2; /* First item will grow twice as much */
    }
  </style>
</head>
<body>

<h1>Flexbox - flex-grow, flex-shrink, flex-basis</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>
```

#### `flex` Shorthand:

* `flex-grow`: How much the item should grow relative to others.
* `flex-shrink`: How much the item should shrink relative to others.
* `flex-basis`: The initial size of the item before growing or shrinking.
* The shorthand `flex: grow shrink basis` allows you to set all three at once.

---

### 7. **align-self**

This property allows you to override the alignment set by `align-items` for individual items.

![image_35.png](image_35.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox - align-self</title>
  <style>
    .flex-container {
      display: flex;
      height: 200px;
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
      align-self: flex-start; /* Override alignment */
    }

    .flex-container > div:nth-child(2) {
      align-self: center; /* Center this item */
    }
  </style>
</head>
<body>

<h1>Flexbox - align-self</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>
```

---
