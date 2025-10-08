import { useState, useEffect } from 'react'

type ProgressCallback = (progress: number) => void;

export const preloadImages = (imageUrls: string[], onProgress?: ProgressCallback): Promise<void> => {
  let loadedImagesCount = 0;

  return new Promise((resolve, reject) => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImagesCount++;
        onProgress?.((loadedImagesCount / imageUrls.length) * 100);
        if (loadedImagesCount === imageUrls.length) {
          resolve()
        }
      }
      img.onerror = reject
    })
  })
}

export const useImagePreloader = (imageUrls: string[]) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadImages(imageUrls, setProgress).then(() => {
      setIsLoaded(true);
    });
  }, [imageUrls]);

  return { progress, isLoaded };
}