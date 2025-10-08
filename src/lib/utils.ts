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

export const preloadFonts = (fontUrls: string[], onProgress?: ProgressCallback): Promise<void> => {
  let loadedCount = 0;
  return new Promise((resolve, reject) => {
    Promise.all(
      fontUrls.map(url => {
        const fileName = url.split('/').pop() || '';
        const family = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        const face = new FontFace(family, `url(${url})`);
        return face.load().then(loadedFace => {
          (document as any).fonts.add(loadedFace);
          loadedCount++;
          onProgress?.((loadedCount / fontUrls.length) * 100);
        });
      })
    )
      .then(() => resolve())
      .catch(reject);
  });
};

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

export const useFontPreloader = (fontUrls: string[]) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadFonts(fontUrls, setProgress).then(() => {
      setIsLoaded(true);
    });
  }, [fontUrls]);

  return { progress, isLoaded };
};