# HTML Elements Types

HTML (HyperText Markup Language) defines the structure of web pages. HTML elements are building blocks of HTML documents, consisting of opening and closing tags, attributes, and content. Below are various types of HTML elements, along with examples.

Sure! Here’s a comprehensive list of **HTML elements**, including a full breakdown of input elements and all other relevant types in HTML.

### 1. **Structural Elements**

These elements define the overall structure of an HTML document.

#### `<html>`

Defines the root of an HTML document.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example</title>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
```

#### `<head>`

Contains metadata about the HTML document, like title, character encoding, links to stylesheets, etc.

```html
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
```

#### `<body>`

Defines the body of the HTML document containing content to be displayed on the webpage.

```html
<body>
  <h1>Hello, World!</h1>
</body>
```

---

### 2. **Text Formatting Elements**

These elements are used to format and style text.

#### `<h1> - <h6>`

Defines header elements, with `<h1>` being the largest and `<h6>` being the smallest.

```html
<h1>Main Header</h1>
<h2>Sub Header</h2>
<h3>Sub Header</h3>
<h4>Sub Header</h4>
<h5>Sub Header</h5>
<h6>Sub Header</h6>
```

#### `<p>`

Defines a paragraph of text.

```html
<p>This is a paragraph of text.</p>
```

#### `<br>`

Inserts a line break.

```html
<p>This is line one.<br>This is line two.</p>
```

#### `<strong>`

Makes text bold and indicates strong emphasis.

```html
<p><strong>This text is important!</strong></p>
```

#### `<em>`

Italicizes text to indicate emphasis.

```html
<p><em>This text is emphasized.</em></p>
```

#### `<mark>`

Highlights text.

```html
<p><mark>Highlighted text</mark></p>
```

#### `<small>`

Defines smaller text.

```html
<p><small>This is small text.</small></p>
```

#### `<del>`

Defines text that has been deleted or is no longer accurate.

```html
<p><del>This text is deleted.</del></p>
```

#### `<ins>`

Defines text that has been inserted or added.

```html
<p><ins>This is inserted text.</ins></p>
```

#### `<code>`

Defines a piece of computer code.

```html
<code>console.log("Hello, World!");</code>
```

#### `<pre>`

Defines preformatted text, preserving whitespace and line breaks.

```html
<pre>
This is preformatted text
    with indentation and line breaks
</pre>
```

---

### 3. **Link Elements**

These elements are used for hyperlinks and navigation.

#### `<a>`

Defines a hyperlink.

```html
<a href="https://www.example.com">Visit Example</a>
```

#### `<link>` {id="link_1"}

Defines relationships between the document and external resources, often used for linking to stylesheets.

```html
<link rel="stylesheet" href="styles.css">
```

---

### 4. **List Elements**

These elements create ordered or unordered lists of items.

#### `<ul>`

Defines an unordered (bulleted) list.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### `<ol>`

Defines an ordered (numbered) list.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

#### `<li>`

Defines a list item in either `<ul>` or `<ol>`.

```html
<li>This is a list item.</li>
```

#### `<dl>`

Defines a description list.

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description of Term 1</dd>
</dl>
```

#### `<dt>`

Defines a term in a description list.

```html
<dt>Term</dt>
```

#### `<dd>`

Defines the description of a term in a description list.

```html
<dd>Description of the term.</dd>
```

---

### 5. **Form Elements**

Form elements allow users to enter data into a webpage.

#### `<form>`

Defines a form for collecting user input.

```html
<form action="/submit" method="POST">
  <!-- Form fields here -->
</form>
```

#### `<input>`

Defines an input field for user data.

```html
<input type="text" name="username" placeholder="Enter your username">
```

#### `<textarea>`

Defines a multiline input field.

```html
<textarea name="message" rows="5" cols="40" placeholder="Enter your message here"></textarea>
```

#### `<button>`

Defines a clickable button.

```html
<button type="submit">Submit</button>
```

#### `<select>`

Defines a drop-down list.

```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
```

#### `<option>`

Defines an option in a drop-down list.

```html
<option value="volvo">Volvo</option>
```

#### `<optgroup>`

Defines a group of related options in a drop-down list.

```html
<optgroup label="Swedish Cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</optgroup>
```

#### `<label>`

Defines a label for an input element.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

#### `<fieldset>`

Defines a group of related elements in a form.

```html
<fieldset>
  <legend>Personal Information</legend>
  <!-- Form fields here -->
</fieldset>
```

#### `<legend>`

Defines a title for a `<fieldset>` element.

```html
<legend>Contact Information</legend>
```

---

### 6. **Table Elements**

These elements are used to display tabular data.

#### `<table>`

Defines a table.

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

#### `<tr>`

Defines a table row.

```html
<tr>
  <td>Row 1, Column 1</td>
  <td>Row 1, Column 2</td>
</tr>
```

#### `<th>`

Defines a table header cell (text is bold and centered by default).

```html
<th>Header</th>
```

#### `<td>`

Defines a table data cell.

```html
<td>Data</td>
```

#### `<caption>`

Defines a title or description for a table.

```html
<caption>Employee Table</caption>
```

#### `<thead>`

Groups the header content in a table.

```html
<thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</thead>
```

#### `<tbody>`

Groups the body content in a table.

```html
<tbody>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</tbody>
```

#### `<tfoot>`

Groups the footer content in a table.

```html
<tfoot>
  <tr>
    <td colspan="2">Total</td>
  </tr>
</tfoot>
```

---

### 7. **Media Elements**

Used for embedding audio, video, and images.

#### `<img>`

Defines an image.

```html
<img src="image.jpg" alt="Description of image">
```

#### `<audio>`

Defines an audio file.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
```

#### `<video>`

Defines a video file.

```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### `<source>`

Defines multiple media resources for `<video>` and `<audio>`.

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

#### `<track>`

Defines text tracks for `<video>` and `<audio>` elements (e.g., subtitles).

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

#### `<picture>`

Defines a container for multiple image sources (responsive images).

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="A sample image">
</picture>
```

---

### 8. **Semantic HTML Elements**

Provide meaning to the structure and help improve accessibility.

#### `<article>`

Defines an independent, self-contained piece of content.

```html
<article>
  <h2>Article Title</h2>
  <p>This is an article content.</p>
</article>
```

#### `<section>`

Defines a section of content, often with a heading.

```html
<section>
  <h2>Section Title</h2>
  <p>This is a section.</p>
</section>
```

#### `<nav>`

Defines navigation links.

```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

#### `<footer>`

Defines a footer for a page or section.

```html
<footer>
  <p>Footer content</p>
</footer>
```

#### `<header>`

Defines the header for a page or section.

```html
<header>
  <h1>Welcome to My Website</h1>
</header>
```

#### `<aside>`

Defines content that is tangentially related to the content around it.

```html
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
  </ul>
</aside>
```

---

### 9. **Script and Meta Elements**

These are used for scripts and meta-information in the document.

#### `<script>`

Defines client-side JavaScript.

```html
<script src="script.js"></script>
```

#### `<meta>`

Provides metadata about the document, such as charset, viewport settings, author, etc.

```html
<meta charset="UTF-8">
<meta name="author" content="John Doe">
```

#### `<style>`

Defines internal CSS for the document.

```html
<style>
  body { background-color: lightblue; }
</style>
```

#### `<link>`

Links to external resources like stylesheets.

```html
<link rel="stylesheet" href="styles.css">
```

#### `<noscript>`

Defines alternative content for browsers that do not support JavaScript.

```html
<noscript>Your browser does not support JavaScript.</noscript>
```

---