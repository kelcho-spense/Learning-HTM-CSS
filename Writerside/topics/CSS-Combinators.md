# CSS Combinators

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

1. Descendant combinator `(space)`
2. Child combinator `(>)`
3. Next sibling combinator `(+)`
4. Subsequent-sibling combinator `(~)`

## Descendant Combinator
The descendant combinator matches all elements that are descendants of a specified element.

The following example selects all <p> elements inside <div> elements: 

```CSS
div p {
  background-color: yellow;
}
```

## Child Combinator (>)
The child combinator selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

```CSS
div > p {
  background-color: yellow;
}
```

## Next Sibling Combinator (+)
The next sibling combinator is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

```CSS
div + p {
  background-color: yellow;
}
```

## Subsequent-sibling Combinator (~)

The subsequent-sibling combinator selects all elements that are next siblings of a specified element.

The following example selects all <p> elements that are next siblings of <div> elements: 
```CSS
div ~ p {
  background-color: yellow;
}
```

## Demo Example 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Combinators Example</title>
    <style>
        /* General styles */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }

        h1, h2 {
            color: #333;
        }

        p {
            color: #555;
            padding: 10px;
        }

        div {
            padding: 20px;
            background-color: #e0e0e0;
            margin: 10px 0;
        }

        /* Descendant Combinator */
        div p {
            background-color: yellow;
        }

        /* Child Combinator */
        div > p {
            background-color: lightblue;
        }

        /* Next Sibling Combinator */
        div + p {
            background-color: lightgreen;
        }

        /* Subsequent Sibling Combinator */
        div ~ p {
            background-color: lightcoral;
        }
    </style>
</head>
<body>
<h1>CSS Combinators</h1>
<h2>Descendant Combinator</h2>
<p>The following <code>div p</code> selects all <code>&lt;p&gt;</code> elements inside <code>&lt;div&gt;</code> elements:</p>
<div>
    <p>This paragraph is inside a div and is selected by the descendant combinator.</p>
</div>
<p>This paragraph is not inside a div and will not be affected by the descendant combinator.</p>

<h2>Child Combinator</h2>
<p>The following <code>div &gt; p</code> selects all <code>&lt;p&gt;</code> elements that are direct children of a <code>&lt;div&gt;</code> element:</p>
<div>
    <p>This paragraph is a child of a div and is selected by the child combinator.</p>
    <div>
        <p>This paragraph is inside a nested div and will not be affected by the child combinator.</p>
    </div>
</div>

<h2>Next Sibling Combinator</h2>
<p>The following <code>div + p</code> selects the first <code>&lt;p&gt;</code> element that is placed immediately after a <code>&lt;div&gt;</code> element:</p>
<div>This is a div element.</div>
<p>This paragraph is immediately after the div and is selected by the next sibling combinator.</p>
<p>This paragraph is not directly after the div, so it will not be affected by the next sibling combinator.</p>

<h2>Subsequent Sibling Combinator</h2>
<p>The following <code>div ~ p</code> selects all <code>&lt;p&gt;</code> elements that are siblings of a <code>&lt;div&gt;</code> element:</p>
<div>This is a div element.</div>
<p>This paragraph is a sibling of the div and is selected by the subsequent sibling combinator.</p>
<p>This paragraph is also a sibling of the div and will be selected by the subsequent sibling combinator.</p>
<div>This is another div element.</div>
<p>This paragraph is after the second div and is selected as a subsequent sibling.</p>
</body>
</html>

```
## Summary
* Descendant Combinator: The first paragraph inside the `<div>` has a `yellow background`.
* Child Combinator: The first `<p>` inside the first `<div>` has a `light blue background`, but the nested `<p>` inside another `<div>` is _unaffected_.
* Next Sibling Combinator: The first `<p>` immediately after a `<div>` gets a `light green background`, but _other paragraphs are unaffected_.
* Subsequent Sibling Combinator: All paragraphs that are siblings of a `<div>` get a `light coral background`, regardless of whether they are directly after the `<div>`.