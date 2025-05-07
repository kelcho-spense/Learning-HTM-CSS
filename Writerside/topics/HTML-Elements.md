# HTML Elements

- An HTML element is defined by a start tag, some content, and an end tag.

- The HTML element is everything from the start tag to the end tag:

`<tagname>Content goes here...</tagname>`
Examples of some HTML elements:

`<h1>My First Heading</h1>`
`<p>My first paragraph.</p>`

## Nested HTML Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

The following example contains four HTML elements `(<html>, <body>, <h1> and <p>)`:
```HTML
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

## Empty HTML Elements
HTML elements with no content are called empty elements.

The `<br>` tag defines a line break, and is an empty element without a closing tag:

```html
<p>This is a <br> paragraph with a line break.</p>
```
## HTML is Not Case Sensitive
HTML tags are not case sensitive: `<P>` means the same as `<p>`.

The HTML standard does not require lowercase tags, but **`W3C recommends lowercase in HTML`**, and demands lowercase for stricter document types like XHTML.