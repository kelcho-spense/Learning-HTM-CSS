# Responsive Image Gallery using Flexbox

Use flexbox to create a responsive image gallery that varies between four, two or full-width images, depending on screen size:

![image_37.png](image_37.png)
```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Image Gallery</title>
<style>
* {
    box-sizing: border-box;
}

body {
margin: 0;
font-family: Arial, Helvetica, sans-serif;
/* Added Helvetica as a fallback */
}

.header {
text-align: center;
padding: 32px;
background-color: #f2f2f2;
/* Added a light background color */
}

.header h1 {
/* Added styling for h1 in header */
font-size: 2.5em;
color: #333;
}

.header p {
/* Added styling for p in header */
font-size: 1.1em;
color: #555;
}

.row {
display: flex;
flex-wrap: wrap;
padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
flex: 25%;
max-width: 25%;
padding: 0 4px;
}

.column img {
margin-top: 8px;
vertical-align: middle;
width: 100%;
/* Replaced inline style with CSS rule */
border-radius: 4px;
/* Added slight rounding to images */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
/* Added a subtle shadow to images */
transition: transform 0.2s ease-in-out;
/* Added hover effect */
}

.column img:hover {
transform: scale(1.03);
/* Slight zoom on hover */
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
.column {
flex: 50%;
max-width: 50%;
}
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
.column {
flex: 100%;
max-width: 100%;
}
}
</style>

</head>
<body>
<!-- Header -->
    <div class="header">
        <h1>Responsive Image Gallery</h1>
        <p>Resize the browser window to see the responsive effect.</p>
    </div>

<!-- Photo Grid -->
    <div class="row">
        <div class="column">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/falls2.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
            <img src="https://www.w3schools.com/w3images/nature.jpg">
            <img src="https://www.w3schools.com/w3images/mist.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
        </div>

        <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
            <img src="https://www.w3schools.com/w3images/ocean.jpg">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/mountainskies.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
        </div>

        <div class="column">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/falls2.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
            <img src="https://www.w3schools.com/w3images/nature.jpg">
            <img src="https://www.w3schools.com/w3images/mist.jpg">
            <img src="https://www.w3schools.com/w3images/paris.jpg">
        </div>

        <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
            <img src="https://www.w3schools.com/w3images/ocean.jpg">
            <img src="https://www.w3schools.com/w3images/wedding.jpg">
            <img src="https://www.w3schools.com/w3images/mountainskies.jpg">
            <img src="https://www.w3schools.com/w3images/rocks.jpg">
            <img src="https://www.w3schools.com/w3images/underwater.jpg">
        </div>
    </div>

</body>
</html>
```


