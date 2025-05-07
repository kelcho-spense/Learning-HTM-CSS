# CSS Fonts

Generic Font Families
In CSS there are five generic font families:

1. `Serif fonts` have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2. `Sans-serif` fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
3. `Monospace fonts` - here all the letters have the same fixed width. They create a mechanical look.
4. `Cursive fonts` imitate human handwriting.
5. `Fantasy fonts` are decorative/playful fonts.

Some font examples
![image_14.png](image_14.png)

## Web Safe Fonts
Fallback Fonts
However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.

Therefore, it is very important to always use fallback fonts.

```CSS
p {
font-family: Tahoma, Verdana, sans-serif;
}
```

Best Web Safe Fonts for HTML and CSS
The following list are the best web safe fonts for HTML and CSS:

1. Arial (sans-serif)
2. Verdana (sans-serif)
3. Tahoma (sans-serif)
4. Trebuchet MS (sans-serif)
5. Times New Roman (serif)
6. Georgia (serif)
7. Garamond (serif)
8. Courier New (monospace)
9. Brush Script MT (cursive)

## Google Fonts
If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.

Google Fonts are free to use, and have more than 1000 fonts to choose from.

### How To Use Google Fonts
```HTML
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```
## Use Multiple Google Fonts
To use multiple Google fonts, just separate the font names with a pipe character (|), like this:

```HTML
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
<style>
h1.a {
  font-family: "Audiowide", sans-serif;
}

h1.b {
  font-family: "Sofia", sans-serif;
}

h1.c {
  font-family: "Trirong", serif;
}
</style>
</head>
<body>

<h1 class="a">Audiowide Font</h1>

<h1 class="b">Sofia Font</h1>

<h1 class="c">Trirong Font</h1>

</body>
</html>
```