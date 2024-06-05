import React from 'react';

const blogPosts = [
  { title: 'Cruising on the Coding Highway: A Joyride with JavaScript and Python', link: 'https://medium.com/@jefftkddan/cruising-on-the-coding-highway-a-joyride-with-javascript-and-python-d28a1a4ea109' },
  { title: 'JavaScript Loops and the Map Method: A Fun Exploration', link: 'https://medium.com/@jefftkddan/javascript-loops-and-the-map-method-a-fun-exploration-cb672439e94d' },
  { title: 'Menoko OG’s Magical Python Quest: Unleashing Coding Sorcery with Loops and List Comprehensions', link: 'https://medium.com/@jefftkddan/menoko-ogs-magical-python-quest-unleashing-coding-sorcery-with-loops-and-list-comprehensions-22c3e8a0ab99' },
  { title: 'Transitioning from Combat Engineering to Software Engineering: A Path to Healing and Growth', link: 'https://medium.com/@jefftkddan/transitioning-from-combat-engineering-to-software-engineering-a-path-to-healing-and-growth-1be494cd7d18' },
  { title: 'A Click is just a Click: Three Stages of Learning Development the Bruce Lee Way', link: 'https://medium.com/@jefftkddan/a-click-is-just-a-click-three-stages-of-learning-development-the-bruce-lee-way-1a374d9efab9' },
  { title: 'Unveiling the Magic: Immutable and Mutable Data Types in Python and JavaScript', link: 'https://medium.com/@jefftkddan/title-unveiling-the-magic-immutable-and-mutable-data-types-in-python-and-javascript-3811cc451b9b' },
  { title: 'The Human Touch: Unveiling the True Power Behind Technology: Don\'t Be Scared of AI', link: 'https://medium.com/@jefftkddan/the-human-touch-unveiling-the-true-power-behind-technology-dont-be-scared-of-ai-ef6fe5fd88bc' },
];

const Blog = () => {
  return (
    <section id="blog" /*className="wrapper style2 py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"*/>
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Blog Posts</h2>
          <p className="text-blue-100">Here are some articles I wrote on <a href="https://medium.com/" target="_blank" className="text-yellow-300 hover:underline">Medium</a> blog site.</p>
        </header>
        <div className="flex flex-wrap justify-center">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 p-4">
              <div className="box style1 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4"><a href={post.link} target="_blank" className="text-blue-500 hover:underline">{post.title}</a></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
