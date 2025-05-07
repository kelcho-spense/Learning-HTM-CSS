# Responsive Blogging site

- desktop view

![image_15.png](image_15.png)

- tablet view

![image_17.png](image_17.png)

- mobile view

![image_16.png](image_16.png)

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Blogging Site</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <div class="container">
        <h1>My Blogging Site</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</header>

<main>
    <div class="container">
        <section class="blog-posts">
            <article class="post">
                <h2>How to Learn Web Development</h2>
                <p>Learning web development can seem overwhelming at first, but with the right resources and approach, you can master it in no time...</p>
                <a href="#">Read more...</a>
            </article>
            <article class="post">
                <h2>CSS Grid Layout: A Beginner's Guide</h2>
                <p>CSS Grid is one of the most powerful layout tools available to web designers. Learn how to use it for responsive design...</p>
                <a href="#">Read more...</a>
            </article>
            <article class="post">
                <h2>JavaScript ES6 Features You Should Know</h2>
                <p>ES6 introduces several new features that simplify JavaScript development. In this post, we’ll explore the most important ones...</p>
                <a href="#">Read more...</a>
            </article>
        </section>

        <aside class="sidebar">
            <h3>About Me</h3>
            <p>Hi, I'm a passionate web developer sharing tips and tutorials on web development. Join me on my journey to create the web!</p>
            <h3>Categories</h3>
            <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>
        </aside>
    </div>
</main>

<footer>
    <div class="container">
        <p>&copy; 2025 My Blogging Site. All rights reserved.</p>
    </div>
</footer>

</body>
</html>
```

```CSS
/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Modern sans-serif font */
    line-height: 1.8;
    /* Increased line height for readability */
    background-color: #f8f9fa;
    /* Lighter background */
    color: #343a40;
    /* Darker text for better contrast */
}

.container {
    width: 85%;
    /* Slightly narrower container for better focus */
    max-width: 1200px;
    /* Max width for large screens */
    margin: 0 auto;
}

/* Header */
header {
    background-color: #ffffff;
    /* White header */
    color: #343a40;
    padding: 25px 0;
    /* Increased padding */
    border-bottom: 1px solid #e9ecef;
    /* Subtle border */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    /* Subtle shadow */
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 2.2em;
    /* Slightly reduced for a cleaner look */
    color: #007bff;
    /* Accent color for the title */
    font-weight: 600;
}

header nav a {
    color: #495057;
    /* Softer link color */
    text-decoration: none;
    margin: 0 18px;
    /* Increased margin */
    font-size: 1.1em;
    /* Slightly adjusted font size */
    font-weight: 500;
    transition: color 0.3s ease;
    /* Smooth transition for hover */
}

header nav a:hover,
header nav a.active {
    /* Added active class styling */
    color: #007bff;
    /* Accent color on hover/active */
    text-decoration: none;
    /* Removed underline */
}

/* Main Content */
main {
    margin-top: 30px;
    /* Increased margin */
    padding-bottom: 30px;
    /* Increased margin */
}

main>.container {
    /* Targeting the main container for flex layout */
    display: flex;
    gap: 30px;
    /* Gap between blog posts and sidebar */
}

.blog-posts {
    flex: 3;
    /* Takes up more space */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* Responsive grid */
    gap: 30px;
    /* Increased gap */
}

.post {
    background-color: #ffffff;
    padding: 25px;
    /* Increased padding */
    border-radius: 10px;
    /* More rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    /* Softer, more modern shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Smooth transition for hover */
}

.post:hover {
    transform: translateY(-5px);
    /* Lift effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    /* Enhanced shadow on hover */
}

.post h2 {
    margin-bottom: 15px;
    /* Increased margin */
    font-size: 1.6em;
    /* Adjusted font size */
    color: #343a40;
    font-weight: 600;
}

.post p {
    margin-bottom: 15px;
    /* Increased margin */
    font-size: 1em;
    color: #6c757d;
    /* Softer paragraph text color */
}

.post a {
    color: #007bff;
    /* Accent color for links */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.post a:hover {
    color: #0056b3;
    /* Darker accent on hover */
    text-decoration: underline;
}

.sidebar {
    flex: 1;
    /* Takes up less space */
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    height: fit-content;
    /* Sidebar height adjusts to content */
}

.sidebar h3 {
    margin-bottom: 15px;
    font-size: 1.4em;
    color: #343a40;
    font-weight: 600;
    border-bottom: 2px solid #007bff;
    /* Accent border for sidebar titles */
    padding-bottom: 8px;
}

.sidebar p {
    /* Added styling for sidebar paragraph */
    font-size: 0.95em;
    color: #6c757d;
    margin-bottom: 20px;
}

.sidebar ul {
    list-style: none;
}

.sidebar ul li {
    margin: 12px 0;
    /* Increased margin */
}

.sidebar ul li a {
    text-decoration: none;
    color: #495057;
    font-weight: 500;
    transition: color 0.3s ease;
}

.sidebar ul li a:hover {
    color: #007bff;
    text-decoration: none;
}

/* Footer */
footer {
    background-color: #343a40;
    /* Darker footer */
    color: #f8f9fa;
    /* Lighter text for footer */
    padding: 30px 0;
    /* Increased padding */
    text-align: center;
    margin-top: 40px;
    /* Added margin top for separation */
}

footer p {
    font-size: 0.9em;
}

/* Media Queries */

/* For tablets (max-width: 992px) - Adjusted breakpoint */
@media (max-width: 992px) {
    main>.container {
        flex-direction: column;
        /* Stack blog posts and sidebar */
    }

    .sidebar {
        margin-top: 30px;
        /* Add space when stacked */
    }
}

/* For smaller tablets and large mobiles (max-width: 768px) */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        text-align: center;
    }

    header h1 {
        margin-bottom: 15px;
    }

    header nav {
        margin-top: 0;
        /* Reset margin */
        display: flex;
        flex-wrap: wrap;
        /* Allow nav items to wrap */
        justify-content: center;
    }

    header nav a {
        margin: 8px 10px;
        /* Adjust margin for wrapped items */
    }

    .blog-posts {
        grid-template-columns: 1fr;
        /* Single column for posts */
    }
}

/* For mobile screens (max-width: 480px) */
@media (max-width: 480px) {
    body {
        font-size: 15px;
        /* Slightly smaller base font for small screens */
    }

    .container {
        width: 95%;
        /* Wider container for small screens */
    }

    header h1 {
        font-size: 1.9em;
        /* Adjusted for mobile */
    }

    header nav a {
        font-size: 1em;
        margin: 8px 0;
        /* Stack nav links vertically */
        display: block;
        /* Make links block for easier tapping */
    }

    header nav {
        flex-direction: column;
        /* Ensure vertical stacking if not already */
    }

    .post {
        padding: 20px;
    }

    .post h2 {
        font-size: 1.4em;
    }

    .sidebar {
        padding: 20px;
    }

    .sidebar h3 {
        font-size: 1.3em;
    }

    footer {
        padding: 20px 0;
        font-size: 0.85em;
    }
}
```