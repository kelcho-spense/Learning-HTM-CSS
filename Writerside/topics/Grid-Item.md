# Grid Item

A grid container contains one or more grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

## The grid-column-start and grid-column-end Properties
The `grid-column-start` property specifies where to start a grid item.

```CSS
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```
![image_70.png](image_70.png)

## The grid-column Property
The `grid-column` property is a shorthand property for the `grid-column-start` and the `grid-column-end` properties.

To place an item, you can refer to line numbers, or use the keyword "span" to define how many columns the item will span.
* Place the first grid item at column-line 1, and let it span 2 columns:
```CSS
.item1 {
  grid-column: 1 / span 2;
}
```
![image_71.png](image_71.png)

* Make "item1" start on column 1 and end before column 4
```CSS
.item1 {
    grid-column: 1 / 4;
}
```
![image_72.png](image_72.png)

* Make "item2" start on column 2 and span 2 columns:
```CSS
.item2 {
    grid-column: 2 / span 2;
} 
```
![image_73.png](image_73.png)

## The grid-row Property
The `grid-row` property is a shorthand property for the `grid-row-start` and the `grid-row-end` properties.

* Place the first `grid` item at row-line 1, and let it span 2 rows:
```CSS
.item1 {
  grid-row: 1 / span 2;
}
```
![image_74.png](image_74.png)
* Make "item1" start on row-line 1 and end before row-line 4:

```CSS
.item1 {
  grid-row: 1 / 4;
}
```
![image_75.png](image_75.png)

## The grid-area Property
The `grid-area` property is a shorthand property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties.

The syntax is `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end`.

* Make "item4" start on row-line 1 and column-line 2, and end on row-line 3 and column line 2:
```CSS
.item4 {
  grid-area: 1 / 2 / 3 / 2;
}
```
![image_76.png](image_76.png)

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

.item4 {
  grid-area: 1 / 2 / 3 / 2;
}
</style>
</head>
<body>

<h1>The grid-area Property</h1>

<p>You can use the <em>grid-area</em> property to specify where to place an item.</p>

<p>Make "item4" start on row 1 and column 2, and end on row 3 and column 2:</p>

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

## Naming Grid Items with grid-area
The `grid-area` property can also be used to assign names to grid items.

The named grid items can then be referred to by the `grid-template-areas` property of the grid container.
```CSS
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main main right'
    'menu footer footer footer footer footer';
}
```
![image_77.png](image_77.png)

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: dodgerblue;
  padding: 10px;
}

.grid-container > div {
  background-color: #f1f1f1;
  color:#000;
  padding: 10px;
  font-size: 30px;
  text-align: center;
}

.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }
</style>
</head>
<body>

<h1>The grid-area Property</h1>

<p>You can use the <em>grid-area</em> property to name grid items.</p>

<p>This grid layout contains six columns and three rows:</p>

<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>

</body>
</html>
```