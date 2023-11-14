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
   const wordsArray = text.split(' ');
   const wordCount = wordsArray.length;
   const wordsPerMinute = 200;
   const readingTime = Math.ceil(wordCount / wordsPerMinute);

   return {
      wordCount,
      time: readingTime
   };
}

export function jsonLDGenerator({ type, post, url, defaultSchema }) {
   const copyright = new Date().getFullYear().toString();

   if (type === 'post') {
      const { wordCount } = readingTime(post.body);
      const keywords = JSON.stringify(post.data.tags);
      const unquoted = keywords.replaceAll('"', '\'');

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
        "keywords": "${unquoted}",
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

export function getTwitterName(twitterName: string, defaultSchema: any) {
   if(twitterName) {
      return twitterName.startsWith('@') ? twitterName : `@${twitterName}`;
   }

   return defaultSchema.twitter_name || '';
}
