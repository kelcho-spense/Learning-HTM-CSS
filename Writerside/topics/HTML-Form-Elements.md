# HTML Form Elements

The HTML <form> element can contain one or more of the following form elements:
```HTML
- <input>
- <label>
- <select>
- <textarea>
- <button>
- <fieldset>
- <legend>
- <datalist>
- <output>
- <option>
- <optgroup>
```

## The <input> Element:
One of the most used form elements is the `<input>` element.

The `<input>` element can be displayed in several ways, depending on the type attribute.

```HTML
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">
```
other `<input>` Types are: 
```HTML
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```
## The <select> Element
The `<select>` element defines a drop-down list:

```HTML
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```
To define a pre-selected option, add the `selected` attribute to the option: ```<option value="fiat" selected>Fiat</option>```

### Visible Values:
Use the `size` attribute to specify the number of visible values:
```HTML
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

### Allow Multiple Selections:
Use the `multiple` attribute to allow the user to select more than one value:
```HTML
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

## The <textarea> Element {id="the-element_1"}
The <textarea> element defines a multi-line input field (a text area):
```HTML
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

The rows attribute specifies the visible number of lines in a text area.

The cols attribute specifies the visible width of a text area.

This is how the HTML code above will be displayed in a browser:

## The <button> Element
The <button> element defines a clickable button:
```HTML
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

## The <fieldset> and <legend> Elements
The <fieldset> element is used to group related data in a form.

The <legend> element defines a caption for the <fieldset> element.
```HTML
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```
This is how the HTML code above will be displayed in a browser:
![image_5.png](image_5.png)


