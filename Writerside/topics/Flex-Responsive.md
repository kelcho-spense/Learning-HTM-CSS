# Center a Div



## Perfect Centering
In the following example we will solve a common style problem: perfect centering.

SOLUTION: Set both the `justify-content` and `align-items` properties to `center`, and the flex item will be perfectly centered:
![image_34.png](image_34.png)

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  color: white;
  width: 100px;
  height: 100px;
}
</style>
</head>
<body>

<h1>Perfect Centering</h1>

<p>A flex container with both the justify-content and the align-items properties set to <em>center</em> will align the item(s) in the center (in both axis).</p>

<div class="flex-container">
  <div></div>
</div>

</body>
</html>
```