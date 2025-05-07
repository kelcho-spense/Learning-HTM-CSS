# CSS Icons

## How To Add Icons
The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.

## Font Awesome Icons
To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the <head> section of your HTML page:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js" crossorigin="anonymous"></script>`
**_Note: No downloading or installation is required!_**

```HTML
<!DOCTYPE html>
<html>
<head>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
         -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"></script>
</head>
<body>

<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>

</body>
</html>
```
## Google Icons
To use the Google icons, add the following line inside the <head> section of your HTML page:

`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

**_Note: No downloading or installation is required!_**

```HTML
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>

<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>

</body>
</html>
```