# Grid Columns/Rows

## Grid Columns
The vertical lines of grid items are called columns.
![image_54.png](image_54.png)

## Grid Rows
The horizontal lines of grid items are called rows.
![image_55.png](image_55.png

## Grid Gaps
The spaces between each column/row are called gaps.
![image_56.png](image_56.png

You can adjust the gap size by using one of the following properties:

* `column-gap`
* `row-gap`
* `gap`

* The `column-gap` property specifies the gap between the columns in a grid.
```CSS
.container {
  display: grid;
  column-gap: 50px;
}
```
* The `row-gap` property specifies the gap between the rows in a grid.
```CSS
.container {
  display: grid;
  row-gap: 50px;
}
```
* The `gap` property is a shorthand property for row-gap and column-gap:
```CSS
.container {
    display: grid;
    gap: 50px 100px;
} 
```

## The grid-column-start and grid-column-end Properties
The `grid-column-start` property specifies where to start a grid item.

The `grid-column-end` property specifies where to end a grid item.
```CSS
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```
```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  background-color: dodgerblue;
  padding: 10px;
}

.grid-container > div {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  font-size: 30px;
}

.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
</head>
<body>

<h1>The grid-column-start and grid-column-end Properties</h1>

<p>The <em>grid-column-start</em> property specifies where to start a grid item. The <em>grid-column-end</em> property specifies where to end a grid item.</p>

<p>Place the first grid item at column-line 1, and let it end on column-line 3:</p>

<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>  
</div>
</body>
</html>
```
![image_57.png](image_57.png)

## The grid-column Property
The `grid-column` property is a shorthand property for the `grid-column-start` and the `grid-column-end` properties.

```CSS
.item1 {
  grid-column: 1 / span 2;
}
```

## The grid-row-start and grid-row-end Property
![image_58.png](image_58.png)
```css
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```
## The grid-row Property
The `grid-row` property is a shorthand property for the `grid-row-start` and the `grid-row-end` properties.