# Grid Container

A grid container contains one or more grid items arranged in columns and rows.
An element becomes a `grid` container when its `display` property is set to `grid` or `inline-grid`.

## Grid Tracks
The `rows` and `columns` of a `grid` is defined with the `grid-template-rows` and the `grid-template-columns` properties (or the shorthand `grid` or `grid-template` properties).

## The grid-template-columns Property
The `grid-template-columns` property defines the number of columns in your grid layout, and it can define the width of each column.

The value is a space-separated-list, where each value defines the width of the respective column.

* Make a grid with 4 columns of equal width:
![image_59.png](image_59.png)

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  background-color: dodgerblue;
  padding: 10px;
}
.grid-container > div {
  background-color: #f1f1f1;
  color: #000;
  padding: 10px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>

<h1>The grid-template-columns Property</h1>

<p>You can use the <em>grid-template-columns</em> property to specify the number of columns in your grid layout.</p>

<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
</div>

</body>
</html>
```

* Set a fixed size for column 1, 2, and 4, and keep column 3 as auto size:
```css
.grid-container {
    display: grid;
    grid-template-columns: 80px 200px auto 40px;
} 
```
![image_60.png](image_60.png)

## Cell Sizing with the fr Unit
The `fr unit` stands for "fraction". This unit automatically divides the available space into `fractions`.

Example: `1fr` will take 1 fraction of the available space, while 2fr will take 2 fractions of the available space.

* Here, each column will take up 25% of the container width, splitting it equally:
![image_61.png](image_61.png)

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

* Here, the second column will be twice as big as the others:
![image_62.png](image_62.png)
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
} 
```

## The grid-template-rows Property
The grid-template-rows property defines the height of each row.

The value is a space-separated-list, where each value defines the height of the respective row

```css
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```
![image_63.png](image_63.png)

## The justify-content Property
The `justify-content` property is used to align the grid items when they do not use all available space on the main-axis (horizontally).

The `justify-content` property can have one of the following values:

1. `space-evenly`
2. `space-around`
3. `space-between`
4. `center`
5. `start`
6. `end`

* The `space-evenly` value displays the grid items with equal space around them:
```css
.grid-container {
    display: grid;
    justify-content: space-evenly;
}
```
![image_64.png](image_64.png)

* The `space-around` value displays the grid items with space around them:
![image_65.png](image_65.png)

* The `space-between` value displays the grid items with space between them:
![image_66.png](image_66.png)

* The `center` value positions the grid items in the center of the container: 
![image_67.png](image_67.png)

* The start value positions the grid items at the start of the container:
![image_68.png](image_68.png)
* The end value positions the grid items at the end of the container:
![image_69.png](image_69.png)

## The align-content Property
The `align-content` property is used to align the grid items when they do not use all available space on the cross-axis (vertically).

The `align-content` property can have one of the following values:

1. `space-evenly`
2. `space-around`
3. `space-between`
4. `center`
5. `start`
6. `end`
