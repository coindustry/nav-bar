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

export { loadPage };