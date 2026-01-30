// Blog.jsx
import React from 'react';

const Blog = () => (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold">Blog Posts</h1>
    <ul className="space-y-2">
      <li>
        <a href="https://blog.shubhra.dev/css-animation-level-up-ui/" className="text-blue-500">CSS Animation: Instantly Level Up Your UI From Boring to Interactive</a>
        <p>December 20, 2025</p>
      </li>
      <li>
        <a href="https://blog.shubhra.dev/css-positioning-keys/" className="text-blue-500">CSS Positioning: The 5 Keys to Master Static, Relative, Absolute, Fixed, Sticky</a>
        <p>November 28, 2025</p>
      </li>
      {/* Add more as needed */}
    </ul>
    <p>Visit my full blog at <a href="https://blog.shubhra.dev/" className="text-blue-500">blog.shubhra.dev</a></p>
  </div>
);

export default Blog;