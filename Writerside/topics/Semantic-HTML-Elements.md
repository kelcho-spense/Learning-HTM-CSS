# HTML Semantic Elements

Semantic HTML elements are those that convey meaning about the content they contain. They describe their content more clearly than non-semantic elements like `<div>` and `<span>`. HTML5 introduced several semantic elements that make it easier for developers to structure web pages logically and for browsers and search engines to understand and interpret the content. These elements help with SEO (Search Engine Optimization) and accessibility, as well as making the code more readable and maintainable.

Here’s a detailed guide to **Semantic HTML Elements** introduced in HTML5, with code samples.

### 1. **`<article>`**

The `<article>` element represents independent, self-contained content that could be distributed and reused, such as a blog post, news article, or forum post.

* **Use Case**: For any content that can stand alone or be syndicated independently.
* **Example**:

```html
<article>
  <header>
    <h2>Understanding HTML5 Semantics</h2>
    <p><time datetime="2025-05-06">May 6, 2025</time> by John Doe</p>
  </header>
  <p>HTML5 introduced several new elements that make webpages more meaningful and accessible. This is an article explaining those changes.</p>
  <footer>
    <p>Tags: <a href="#">HTML5</a>, <a href="#">Semantics</a></p>
  </footer>
</article>
```

---

### 2. **`<section>`**

The `<section>` element represents a generic section of content, often with a heading. It's used to group thematically related content, such as a chapter in a document or a thematic group of content in a webpage.

* **Use Case**: Group related content, like an introduction, main content, or a section of an article.
* **Example**:

```html
<section>
  <header>
    <h3>Introduction to HTML5 Semantics</h3>
  </header>
  <p>HTML5 semantics help make the structure of a webpage more meaningful.</p>
</section>
```

---

### 3. **`<nav>`**

The `<nav>` element defines navigation links. It indicates to the browser and screen readers that the links inside this container represent a navigation menu.

* **Use Case**: For grouping primary navigation links, like a website’s main menu.
* **Example**:

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

---

### 4. **`<header>`**

The `<header>` element represents a group of introductory content or a set of navigational links. It typically contains things like the logo, navigation links, or introductory information about the webpage.

* **Use Case**: To wrap introductory content or navigation for a section or the entire page.
* **Example**:

```html
<header>
  <h1>Welcome to My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

---

### 5. **`<footer>`**

The `<footer>` element defines a footer for a document or section. It typically contains information like copyright notices, contact information, or related links.

* **Use Case**: To wrap up a section or the entire document with footer-related content.
* **Example**:

```html
<footer>
  <p>&copy; 2025 My Website</p>
  <p>Contact: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</footer>
```

---

### 6. **`<aside>`**

The `<aside>` element represents content that is tangentially related to the content around it, often presented as a sidebar. It can be used for side notes, additional information, or advertisements.

* **Use Case**: For related but non-essential content that could be moved without affecting the main content.
* **Example**:

```html
<aside>
  <h4>Did You Know?</h4>
  <p>HTML5 introduced new semantic elements to help make webpages more accessible.</p>
</aside>
```

---

### 7. **`<main>`**

The `<main>` element represents the dominant content of the `<body>`, excluding things like headers, footers, and sidebars. There should be only one `<main>` element per document.

* **Use Case**: For wrapping the primary content of a webpage or document.
* **Example**:

```html
<main>
  <h2>Featured Articles</h2>
  <article>
    <h3>HTML5 Features</h3>
    <p>This article talks about the new features in HTML5.</p>
  </article>
  <article>
    <h3>CSS Grid Layout</h3>
    <p>Learn how to use CSS Grid to create complex layouts easily.</p>
  </article>
</main>
```

---

### 8. **`<figure>`**

The `<figure>` element represents self-contained content, often with a `<figcaption>`. It is used to group media like images, diagrams, or videos and their respective captions.

* **Use Case**: For grouping an image or video with a caption.
* **Example**:

```html
<figure>
  <img src="html5-logo.png" alt="HTML5 Logo">
  <figcaption>The HTML5 Logo</figcaption>
</figure>
```

---

### 9. **`<figcaption>`**

The `<figcaption>` element defines a caption for the content inside a `<figure>`.

* **Use Case**: To provide a caption or description for an image, video, or other media in a `<figure>`.
* **Example**:

```html
<figure>
  <img src="js-frameworks.jpg" alt="JavaScript Frameworks">
  <figcaption>Popular JavaScript Frameworks in 2025</figcaption>
</figure>
```

---

### 10. **`<mark>`**

The `<mark>` element represents text that has been highlighted or marked for reference or emphasis. It is typically rendered with a yellow background color.

* **Use Case**: To highlight text for emphasis, usually used in search results.
* **Example**:

```html
<p>This is <mark>important</mark> information about HTML5 semantics.</p>
```

---

### 11. **`<progress>`**

The `<progress>` element represents the completion of a task, like a progress bar. It is used for displaying the progress of a process such as file downloads or uploads.

* **Use Case**: To show a visual indication of progress.
* **Example**:

```html
<progress value="70" max="100">70%</progress>
```

---

### 12. **`<meter>`**

The `<meter>` element represents a scalar measurement within a known range, such as a disk usage bar or a temperature gauge.

* **Use Case**: For displaying a measurement within a known range.
* **Example**:

```html
<meter value="0.7" min="0" max="1">70%</meter>
```

---

### 13. **`<details>` and `<summary>`**

The `<details>` element creates a disclosure widget from which the user can obtain additional information or controls. The `<summary>` element is used to define a heading or label for the `<details>` element.

* **Use Case**: For creating collapsible content (e.g., FAQs, or additional information).
* **Example**:

```html
<details>
  <summary>Click to view more information</summary>
  <p>This is the additional information that can be toggled open and closed.</p>
</details>
```

---

### 14. **`<time>`**

The `<time>` element represents a specific period in time or a date/time value. It's useful for marking dates, times, or durations in content.

* **Use Case**: To represent a date, time, or duration.
* **Example**:

```html
<p>We will meet on <time datetime="2025-05-06">May 6, 2025</time> at 10:00 AM.</p>
```

---

### 15. **`<wbr>`**

The `<wbr>` element specifies where the browser can optionally break a word for wrapping if necessary. This helps improve text layout and readability in narrow spaces.

* **Use Case**: To suggest line break opportunities in long words.
* **Example**:

```html
<p>This is a longword that might break at <wbr>appropriate places.</p>
```

---
