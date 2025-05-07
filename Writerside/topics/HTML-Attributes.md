# HTML Attributes

HTML attributes provide additional information about HTML elements.

1. All HTML elements can have **attributes**
2. Attributes provide **additional information** about elements
3. Attributes are always specified **in the start tag**
4. Attributes usually come in name/value pairs like: **name="value"**

## The href Attribute

The `<a> `tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:

```HTML
<a href="https://teach2give.com">Teach2give website</a>
```

## The src Attribute
The `<img>` tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

```HTML
<img src="img_girl.jpg">
```

## The width and height Attributes
The `<img>` tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):

```HTML
<img src="img_girl.jpg" width="500" height="600">
```

## The alt Attribute

The required `alt` attribute for the `<img>` tag specifies an alternate text for an image, if the image for some reason cannot be displayed. 
This can be due to a slow connection, or an error in the `src` attribute, or if the user uses a screen reader.
```HTML
<img src="img_girl.jpg" alt="Girl with a jacket">
```
## The style Attribute
The `style` attribute is used to add styles to an element, such as color, font, size, 

```HTML
<p style="color:red;">This is a red paragraph.</p>
```

## The lang Attribute
You should always include the `lang` attribute inside the `<html>` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

The following example specifies English as the language:
```HTML
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
```