# CSS Attribute Selectors

It is possible to style HTML elements that have specific attributes or attribute values.


### Demo Example 

Below is a simple school website designed to teach CSS Attribute Selectors. The page contains examples of how attribute selectors work in CSS, with various interactive and practical examples based on a school-themed site.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn CSS Attribute Selectors | School Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            color: #333;
        }

        header {
            background-color: #4CAF50;
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
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #333;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 16px;
            line-height: 1.6;
        }

        code {
            background-color: #f4f4f4;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
        }

        .student-list {
            list-style: none;
            padding-left: 0;
        }

        .student-list li {
            margin: 10px 0;
            font-size: 16px;
            padding: 8px;
            background-color: #f1f1f1;
            border-radius: 4px;
        }

        .student-list li.highlight {
            background-color: #ffeb3b;
        }

        .student-list li[class*="grade-A"] {
            background-color: #81c784;
            color: white;
        }

        .student-list li[data-attendance="100%"] {
            background-color: #64b5f6;
            color: white;
        }

        a {
            color: #4CAF50;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .example {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 6px;
            margin: 10px 0;
        }

        .example code {
            display: block;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<header>
    <h1>Learn CSS Attribute Selectors - School Website</h1>
</header>

<div class="content">
    <h2>What are CSS Attribute Selectors?</h2>
    <p>CSS attribute selectors allow you to target HTML elements based on the presence or value of their attributes. They are extremely useful when you want to apply styles to specific elements without needing to use classes or IDs.</p>

    <p>Attribute selectors use the following syntax:</p>
    <code>selector[attribute="value"] { property: value; }</code>

    <h2>Basic Attribute Selectors</h2>
    <p>Here are some examples of how to use attribute selectors to target elements in your HTML:</p>

    <div class="example">
        <h3>1. Select Elements with a Specific Attribute</h3>
        <p>To select all elements with a specific attribute:</p>
        <code>input[type="text"] { background-color: lightyellow; }</code>
        <p>This will apply a light yellow background to all text input fields.</p>
    </div>

    <h2>Example 1: School Student List</h2>
    <p>In the student list below, we'll use attribute selectors to style students based on their grades and attendance:</p>

    <ul class="student-list">
        <li class="grade-A" data-attendance="100%">John Doe - Grade A - 100% Attendance</li>
        <li class="grade-B" data-attendance="90%">Jane Smith - Grade B - 90% Attendance</li>
        <li class="grade-A" data-attendance="100%">Alice Johnson - Grade A - 100% Attendance</li>
        <li class="grade-C" data-attendance="85%">Bob Brown - Grade C - 85% Attendance</li>
        <li class="grade-A" data-attendance="95%">Eve White - Grade A - 95% Attendance</li>
    </ul>

    <h2>Using Attribute Selectors to Style Students</h2>
    <div class="example">
        <h3>2. Select Elements Based on Partial Attribute Values</h3>
        <p>To select elements with an attribute value that contains a certain substring:</p>
        <code>li[class*="grade-A"] { font-weight: bold; color: green; }</code>
        <p>This targets all elements whose class contains "grade-A" (i.e., students with grade A) and styles them with bold green text.</p>
    </div>

    <div class="example">
        <h3>3. Select Elements with Specific Data Attributes</h3>
        <p>To select all elements with a specific data attribute value:</p>
        <code>li[data-attendance="100%"] { background-color: lightblue; }</code>
        <p>This will highlight students with 100% attendance by applying a light blue background.</p>
    </div>

    <h2>Advanced Attribute Selectors</h2>
    <p>Attribute selectors are not limited to exact matches. You can use various types of matching based on the attribute value:</p>

    <ul>
        <li><code>selector[attribute="value"]</code>: Matches elements with the exact value of the attribute.</li>
        <li><code>selector[attribute*="value"]</code>: Matches elements where the attribute contains the specified substring.</li>
        <li><code>selector[attribute^="value"]</code>: Matches elements where the attribute starts with the specified value.</li>
        <li><code>selector[attribute$="value"]</code>: Matches elements where the attribute ends with the specified value.</li>
        <li><code>selector[attribute~="value"]</code>: Matches elements where the attribute contains a space-separated list of values, and one of them is the specified value.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>CSS attribute selectors provide a powerful way to target elements based on their attributes, making your styles more flexible and reducing the need for extra classes or IDs. Try experimenting with these selectors on your own projects to see how they can make your CSS more dynamic!</p>
</div>

</body>
</html>
```

### The Structure:

1. **Header**:

    * The header introduces the website and the concept of CSS attribute selectors with a school theme. It includes a green background to match the educational theme.

2. **Content Section**:

    * This section explains CSS attribute selectors, with examples of how they can be applied to real-world scenarios, like styling students based on their grades or attendance.

3. **Attribute Selector Examples**:

    * **Basic Attribute Selector**: The `input[type="text"]` selector is used to style text input fields by changing their background color.
    * **Student List**: A list of students is presented with classes that represent their grades (A, B, C) and data attributes representing their attendance.
    * The list items are styled based on their class and data attributes using various CSS attribute selectors:

        * **`[class*="grade-A"]`**: Selects students with "grade-A" in their class name and applies bold green text to them.
        * **`[data-attendance="100%"]`**: Highlights students with 100% attendance by changing their background color.

4. **Advanced Attribute Selectors**:

    * The page introduces more complex attribute selectors such as `^=`, `$=`, `*=`, and `~=`, explaining how they work with examples.
    * This section demonstrates the versatility of CSS attribute selectors for matching attribute values in different ways.
