var API_KEY = '44049629-68874dc1d5d3f1658a8c62064';

export async function fetchImage(query) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error searching images:', error.message);
    return [];
  }
}