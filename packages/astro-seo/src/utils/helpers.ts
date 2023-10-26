function slugify(text: string): string {
   return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}

function readingTime(text: string): { time: number; wordCount: number } {
   // Split the text into an array of words
   const wordsArray = text.split(' ');

   // Count the number of words in the array
   const wordCount = wordsArray.length;

   // Calculate the estimated reading time
   const wordsPerMinute = 200;
   const readingTime = Math.ceil(wordCount / wordsPerMinute);

   return {
      wordCount,
      time: readingTime
   };
}


export default function jsonLDGenerator({ type, post, url, defaultSchema }) {
   console.log('GEN', post);
   const copyright = new Date().getFullYear().toString();

   if (type === 'post') {
      const { wordCount } = readingTime(post.body);

      return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.data.title}",
        "description": "${post.data.excerpt}",
        "image": "${post.data.featured_image.src.src}",
        "wordcount": "${wordCount}",
        "author": {
          "@type": "Person",
          "name": "${post.data.author}",
          "url": "${import.meta.env.SITE}/author/${slugify(post.data.author)}"
        },
        "datePublished": "${post.data.date}",
        "keywords": "${post.data.tags}",
        "isFamilyFriendly": "true",
        "copyrightYear": "${copyright}"
      }
    </script>`;
   }

   return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${defaultSchema.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
