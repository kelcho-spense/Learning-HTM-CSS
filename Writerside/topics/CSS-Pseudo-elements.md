# CSS Pseudo-elements

A CSS pseudo-element is used to style specific parts of an element.

For example, it can be used to:

* Style the first letter or line, of an element
* Insert content before or after an element
* Style the markers of list items
* Style the viewbox behind a dialog box

## The ::first-line Pseudo-element
The ::first-line pseudo-element is used to add a special style to the first line of a text.

```CSS
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```
**_Note: The ::first-line pseudo-element can only be applied to block-level elements._**

The following properties apply to the `::first-line` pseudo-element:

* font properties
* color properties
* background properties
* word-spacing
* letter-spacing
* text-decoration
* vertical-align
* text-transform
* line-height
* clear

The following example formats the first line of the text in all <p> elements:

## The ::first-letter Pseudo-element
The ::first-letter pseudo-element is used to add a special style to the first letter of a text.

The following example formats the first letter of the text in all <p> elements:
```CSS
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```
**_Note: The ::first-letter pseudo-element can only be applied to block-level elements._**

## CSS - The ::before Pseudo-element
The `::before` pseudo-element can be used to insert some content before the content of an element.

The following example inserts an image before the content of each `<h1> `element:
```CSS
h1::before {
  content: url(smiley.gif);
}
```

## CSS - The ::after Pseudo-element
The `::after` pseudo-element can be used to insert some content after the content of an element.

The following example inserts an image after the content of each `<h1>` element:
```CSS
h1::after {
  content: url(smiley.gif);
}
```
## Learn CSS Pseudo-elements with below Example

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn CSS Pseudo-elements | Blog Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f7f7f7;
            color: #333;
        }

        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }

        header h1 {
            font-size: 2.5em;
        }

        .content {
            width: 80%;
            max-width: 1000px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #444;
        }

        p {
            color: #555;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        ul {
            list-style: none;
            padding-left: 0;
        }

        ul li {
            margin-bottom: 10px;
            font-size: 16px;
        }

        code {
            background-color: #f9f9f9;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
        }

        /* Pseudo-element examples */
        .post p::first-letter {
            color: #ff6347;
            font-size: 2em;
            font-weight: bold;
        }

        .post p::first-line {
            color: #4682b4;
            font-variant: small-caps;
        }

        h1::before {
            content: "📖 ";
            font-size: 1.5em;
        }

        h1::after {
            content: " 📖";
            font-size: 1.5em;
        }

        .post ul::marker {
            color: #ff6347;
            font-size: 20px;
        }

        ::selection {
            background-color: #ff6347;
            color: white;
        }

        /* Example with class-specific pseudo-element */
        .highlight::first-letter {
            color: #32cd32;
            font-size: 2em;
        }
    </style>
</head>
<body>

<header>
    <h1>Learn CSS Pseudo-elements - Blog Example</h1>
</header>

<div class="content">
    <h2>What are CSS Pseudo-elements?</h2>
    <p>CSS pseudo-elements are used to style specific parts of an element. They allow you to manipulate the content of an element without changing the underlying HTML structure. Below are a few examples showing how pseudo-elements can be applied in a blog post.</p>

    <h2>Example 1: ::first-letter</h2>
    <p class="post">This is a blog post where the first letter of the first paragraph is styled with the <code>::first-letter</code> pseudo-element. Notice how the first letter of this paragraph is red and larger in size.</p>

    <h2>Example 2: ::first-line</h2>
    <p class="post">This is another paragraph where the <code>::first-line</code> pseudo-element applies a different style to the first line. The first line is now blue and in small caps. This shows how you can target the first line of text inside a block-level element.</p>

    <h2>Example 3: ::before and ::after</h2>
    <p>The <code>::before</code> and <code>::after</code> pseudo-elements are used to insert content before or after an element. In the example below, the heading has a book emoji before and after the text.</p>
    <h1>CSS Pseudo-elements in Practice</h1>

    <h2>Example 4: ::marker</h2>
    <p>The <code>::marker</code> pseudo-element is used to style the markers (bullets or numbers) of list items. In this example, the list items are styled with a custom color for their markers.</p>
    <ul>
        <li>Learn about pseudo-elements</li>
        <li>Style specific parts of an element</li>
        <li>Insert content with ::before and ::after</li>
    </ul>

    <h2>Example 5: ::selection</h2>
    <p>The <code>::selection</code> pseudo-element styles the portion of text selected by the user. Try selecting this paragraph, and you'll see the background color changes to a tomato red.</p>
    <p>Try highlighting this text to see the <code>::selection</code> effect in action. The background will turn red with white text when selected!</p>

    <h2>Combining Pseudo-elements with HTML Classes</h2>
    <p class="highlight">This paragraph has a special class <code>highlight</code>, and the first letter is styled differently using the <code>::first-letter</code> pseudo-element, making it green and larger.</p>
</div>

</body>
</html>

```

## Summary

1. Header:
   The header uses ::before and ::after to add a book emoji (📖) before and after the title of the blog post, making the title more engaging.

2. Pseudo-elements Applied to Paragraphs:
   ::first-letter: In the first example, the first letter of the paragraph is styled with a large, bold red font to give a distinctive look to the beginning of each post.

::first-line: In the second example, the first line of text in the paragraph is styled with a blue color and small-caps to create visual interest.

3. List Markers with ::marker:
   The list markers (bullet points) in the unordered list are styled with the ::marker pseudo-element, changing their color to red for a more unique look.

4. Selection with ::selection:
   The ::selection pseudo-element is applied to style the portion of the text that the user selects with their mouse or keyboard. In this case, it changes the background to a tomato red and the text color to white when selected.

5. Combining Pseudo-elements with Classes:
   The paragraph with the highlight class demonstrates how pseudo-elements can be applied in conjunction with specific classes. The first letter of this paragraph is made green and larger using the ::first-letter pseudo-element, highlighting its distinct style.
