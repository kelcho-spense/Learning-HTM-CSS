# HTML Blogs Layouts

Below are four different blog layouts using HTML5 semantic elements. These layouts represent various structures that a blog page might have. Each layout makes use of semantic elements introduced in HTML5, such as `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, and others.

Below are four different blog layouts using **HTML5 semantic elements**. These layouts represent various structures that a blog page might have. Each layout makes use of semantic elements introduced in HTML5, such as `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, and others.

### 1. **Basic Blog Layout**

This layout is a simple blog page with a header, main content area, a sidebar, and a footer. It includes a list of blog articles.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog - Basic Layout</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    header, footer { background-color: #333; color: white; padding: 1rem; text-align: center; }
    main { display: flex; padding: 20px; }
    .content { flex: 3; padding: 20px; }
    .sidebar { flex: 1; padding: 20px; background-color: #eee; }
    article { background-color: white; margin-bottom: 20px; padding: 15px; border-radius: 5px; }
    h1, h2 { color: #333; }
    footer { font-size: 0.9rem; }
  </style>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <section class="content">
      <article>
        <header>
          <h2>Blog Post 1</h2>
          <p><time datetime="2025-05-06">May 6, 2025</time> by <a href="#">John Doe</a></p>
        </header>
        <p>This is the content of the first blog post.</p>
      </article>
      <article>
        <header>
          <h2>Blog Post 2</h2>
          <p><time datetime="2025-05-05">May 5, 2025</time> by <a href="#">Jane Smith</a></p>
        </header>
        <p>This is the content of the second blog post.</p>
      </article>
    </section>

    <aside class="sidebar">
      <h3>About Me</h3>
      <p>Hi, I'm John Doe, a passionate writer and blogger.</p>
      <h3>Recent Posts</h3>
      <ul>
        <li><a href="#">Blog Post 1</a></li>
        <li><a href="#">Blog Post 2</a></li>
        <li><a href="#">Blog Post 3</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>
```

### 2. **Blog with Featured Image and Sidebar**

This layout features a more detailed blog post with a large featured image, content area, and sidebar. The sidebar includes recent posts, a search bar, and a social media link.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Featured Post</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        header,
        footer {
            background-color: #444;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        main {
            display: flex;
            padding: 20px;
        }

        .content {
            flex: 2;
            padding: 20px;
        }

        .sidebar {
            flex: 1;
            padding: 20px;
            background-color: #e9e9e9;
        }

        article {
            background-color: white;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 8px;
        }

        h1,
        h2 {
            color: #333;
        }

        img {
            width: 100%;
            border-radius: 5px;
        }

        .recent-posts {
            margin-top: 30px;
        }

        /* body {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Ensures body takes at least full viewport height */
        /* } */

        /* main { */
        /* flex-grow: 1; Allows main content to expand and push footer down */
        /* } */

        /* footer { */
        /* font-size: 0.9rem; This was the content of your original selection */
        /* No additional positioning properties are needed for the footer with this flexbox approach */
        /* } */
    </style>
</head>

<body>
<header>
    <h1>Blog with Featured Image</h1>
    <nav>
        <a href="#">Home</a> | <a href="#">Categories</a> | <a href="#">Contact</a>
    </nav>
</header>

<main>
    <section class="content">
        <article>
            <header>
                <h2>Exploring the Beauty of HTML5</h2>
                <p><time datetime="2025-05-06">May 6, 2025</time> by <a href="#">John Doe</a></p>
            </header>
            <img src="https://via.placeholder.com/800x400" alt="HTML5 Image">
            <p>HTML5 introduced many important features that revolutionized web development. Let’s dive into what
                makes HTML5 stand out and how it empowers developers.</p>
        </article>
    </section>

    <aside class="sidebar">
        <h3>Recent Posts</h3>
        <ul>
            <li><a href="#">Understanding JavaScript</a></li>
            <li><a href="#">Introduction to CSS Grid</a></li>
            <li><a href="#">Building Responsive Websites</a></li>
        </ul>

        <h3>Follow Us</h3>
        <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
    </aside>
</main>

<footer>
    <p>&copy; 2025 My Blog. All rights reserved.</p>
</footer>
</body>
</html>
```

### 3. **Multi-Column Blog Layout with Footer Navigation**

This layout includes multiple columns in the content area, with each column representing different categories or articles. It also has footer navigation links.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Column Blog</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff; }
    header, footer { background-color: #222; color: white; padding: 1rem; text-align: center; }
    main { display: flex; justify-content: space-between; padding: 20px; }
    .main-content { flex: 3; }
    .sidebar { flex: 1; padding: 20px; background-color: #f4f4f4; }
    .column { background-color: #fff; padding: 20px; margin: 10px 0; border-radius: 8px; }
    footer { font-size: 0.9rem; display: flex; justify-content: space-around; padding: 20px 0; }
    footer a { color: white; text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <h1>My Multi-Column Blog</h1>
    <nav>
      <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <section class="main-content">
      <section class="column">
        <h2>Latest Articles</h2>
        <article>
          <header>
            <h3>Understanding CSS Flexbox</h3>
            <p><time datetime="2025-05-06">May 6, 2025</time> by <a href="#">John Doe</a></p>
          </header>
          <p>Learn the basics of CSS Flexbox and how to use it to create responsive layouts.</p>
        </article>
      </section>

      <section class="column">
        <h2>Popular Posts</h2>
        <article>
          <header>
            <h3>Exploring CSS Grid</h3>
            <p><time datetime="2025-05-05">May 5, 2025</time> by <a href="#">Jane Smith</a></p>
          </header>
          <p>CSS Grid is a powerful tool for creating complex layouts. Learn how to master it!</p>
        </article>
      </section>
    </section>

    <aside class="sidebar">
      <h3>About Me</h3>
      <p>Hello, I am a web developer who loves teaching HTML, CSS, and JavaScript. Follow my blog for regular updates.</p>
    </aside>
  </main>

  <footer>
    <nav>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact</a>
    </nav>
  </footer>
</body>
</html>
```

### 4. **Blog Layout with Hero Section and Footer Widgets**

This layout features a large hero section with an introduction and an emphasis on a featured article, along with a footer that includes multiple widget areas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog with Hero Section</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    header { background-color: #333; color: white; padding: 2rem; text-align: center; }
    header h1 { margin: 0; }
    .hero { background-color: #333; color: white; padding: 5rem 0; text-align: center; }
    .hero h2 { margin: 0; font-size: 2.5rem; }
    main { padding: 20px; display: flex; flex-direction: column; align-items: center; }
    article { background-color: white; margin: 20px 0; padding: 20px; border-radius: 8px; width: 80%; max-width: 900px; }
    footer { background-color: #333; color: white; padding: 1rem 0; text-align: center; font-size: 0.9rem; }
    footer .footer-widgets { display: flex; justify-content: space-around; padding: 20px 0; }
    footer .widget { width: 30%; }
  </style>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a> | <a href="#">Categories</a> | <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Welcome to My Blog</h2>
    <p>Explore articles on web development, design, and more.</p>
  </section>

  <main>
    <article>
      <header>
        <h2>Featured Article: The Future of Web Development</h2>
        <p><time datetime="2025-05-06">May 6, 2025</time> by <a href="#">John Doe</a></p>
      </header>
      <p>The future of web development is constantly evolving. Learn about the new trends that will shape the web in the coming years...</p>
    </article>
  </main>

  <footer>
    <nav>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact</a>
    </nav>
    <div class="footer-widgets">
      <div class="widget">
        <h3>Categories</h3>
        <ul>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Programming</a></li>
        </ul>
      </div>
      <div class="widget">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>
```

---