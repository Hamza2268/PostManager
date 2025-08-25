# PostManager
# PostManager

**PostManager** is a simple web application built with **Node.js**, **Express**, and **EJS** that allows users to create, read, update, and delete posts. Each post has a topic and a description. The app is lightweight and uses in-memory storage for demonstration purposes.

---

## Features

- **Add Post**: Users can create a new post with a topic and description.
- **View Posts**: List all posts and view the full description of each post.
- **Update Post**: Edit the topic or description of an existing post.
- **Delete Post**: Remove selected posts from the list.

---

## Technologies Used

- **Node.js** - JavaScript runtime for server-side development.
- **Express.js** - Web framework for building APIs and web apps.
- **EJS** - Templating engine for rendering dynamic HTML.
- **Body-parser** - Middleware for parsing form data.
- **Static Files** - CSS and front-end assets served from a `public` folder.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/PostManager.git
```
2. Navigate into the project directory:

```bash
cd PostManager
```
3. Install dependencies:

```bash
npm install
```
4. Start the server

```bash
node index.js
```

PostManager/
│
├─ public/              # Static assets (CSS, JS)
├─ views/               # EJS templates
│   ├─ partials/        # Header and footer templates
│   ├─ index.ejs        # Home page / list of posts
│   ├─ posts.ejs        # Add post page
│   ├─ added.ejs        # Confirmation page after adding a post
│   ├─ delete.ejs       # Delete post page
│   ├─ update.ejs       # Update post page
│
├─ app.js               # Main Express server file
├─ package.json         # Project metadata and dependencies
└─ README.md            # Project documentation


You can **copy this entire block at once** and save it as `README.md` in your project.  

If you want, I can also make a **fancier GitHub-ready version with badges and screenshots** in a single block too. Do you want me to do that?

5. Open your browser and :

```bash
http://localhost:3000
```

