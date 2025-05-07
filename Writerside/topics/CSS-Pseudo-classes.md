# CSS Pseudo-classes

## What are Pseudo-classes?

A pseudo-class is used to define a special state of an element.

For example, it can be used to:

1. Style an element when a user moves the mouse over it
2. Style visited and unvisited links differently
3. Style an element when it gets focus
4. Style valid/invalid/required/optional form elements

### Syntax
The syntax of pseudo-classes:
```CSS
selector:pseudo-class {
  property: value;
}
```

## Anchor Pseudo-classes
Links can be displayed in different ways:

```CSS
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

## Pseudo-classes and HTML Classes
Pseudo-classes can be combined with HTML classes:

## Example: 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Pseudo-classes Example</title>
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
        }

        /* Basic link styles */
        a {
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
        }

        /* Anchor Pseudo-classes */
        /* unvisited link */
        a:link {
            color: #FF0000;
        }

        /* visited link */
        a:visited {
            color: #00FF00;
        }

        /* mouse over link */
        a:hover {
            color: #FF00FF;
        }

        /* selected link */
        a:active {
            color: #0000FF;
        }

        /* Pseudo-classes with HTML classes */
        .button:hover {
            background-color: #4CAF50;
            color: white;
        }

        .input-field:focus {
            background-color: #e0f7fa;
            border: 2px solid #00acc1;
        }

        .required:invalid {
            background-color: #ffebee;
            border: 2px solid #f44336;
        }

        .required:valid {
            background-color: #c8e6c9;
            border: 2px solid #4caf50;
        }

        .input-field {
            padding: 8px;
            margin: 10px 0;
            width: 200px;
            border: 1px solid #ddd;
        }

        .button {
            padding: 10px 15px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>CSS Pseudo-classes</h1>
    <h2>What are Pseudo-classes?</h2>
    <p>A pseudo-class is used to define a special state of an element.</p>
    <ul>
        <li>Style an element when a user moves the mouse over it</li>
        <li>Style visited and unvisited links differently</li>
        <li>Style an element when it gets focus</li>
        <li>Style valid/invalid/required/optional form elements</li>
    </ul>

    <h2>Anchor Pseudo-classes</h2>
    <p>Links can be displayed in different ways:</p>
    <ul>
        <li><a href="#">Unvisited Link</a></li>
        <li><a href="#" class="visited">Visited Link</a></li>
    </ul>

    <h2>Combining Pseudo-classes with HTML Classes</h2>
    <form>
        <input type="text" class="input-field required" placeholder="Enter your name" required>
        <input type="text" class="input-field" placeholder="Optional input">
        <button type="submit" class="button">Submit</button>
    </form>
</body>
</html>

```