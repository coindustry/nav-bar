import React, { useState, useEffect } from 'react';

function PageLoader() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Load the initial page content when the component mounts
    loadPage('signin.html').then(setContent);
  }, []);

  async function loadPage(page) {
    try {
      // fetch the page content
      const response = await fetch(page);
      
      // check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to load page');
      }
      
      // get text from response
      const content = await response.text();

      return content; // Return the content
    } catch (error) {
      console.error(error);
      return null; // Return null in case of error
    }
  }

  return (
    <div className="container mt-4">
      {/* Render the fetched content */}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default PageLoader;
