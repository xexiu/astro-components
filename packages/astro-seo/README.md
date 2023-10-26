# 🚀 `astro-seo`

[![NPM](https://img.shields.io/npm/v/@xexiu/astro-seo)](https://www.npmjs.com/package/@xexiu/astro-seo)
![Downloads](https://img.shields.io/npm/dt/@xexiu/astro-seo.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xexiu/astro-components/pulls)
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

## HELLO there 👋

- Twitter: <https://twitter.com/xexiudev> drop by and say hi, follow me and I follow you. Let's build a community.

> **SEO builder with jsonLDGenerator for Astro.** Generates all the metas and jsonLD needed for SEO.
---
> Forking and giving a star will contribute to my motivation in making components for astro (react, react-native, etc...) that are purely HTML, CSS, SEO friendly and responsive :) (almost all components :P).
---

## Tutorials Roadmap

- **Web2**: JavaScript, HTML, CSS, Node.js, Python (MLL, AI), React, NextJS React Native and more.
- **Web3**: Blockchain, WEB3, dApps, smart contracts and more.

## 📦 Installation

- Using bun:

``` javascript
bun i @xexiu/astro-seo
```

- Using npm:

```javascript
npm i @xexiu/astro-seo
```

## 🔁 API

- Props:

```javascript
export type PostDataFeaturedImage = {
   src: string | any;
   alt: string;
}

export type PostData = {
   category: string;
   title: string;
   excerpt: string;
   tags: string[];
   date: Date | string;
   author: string;
   featured_post?: boolean;
   is_private?: boolean;
   featured_image: PostDataFeaturedImage;
}

export type Post = {
   id: string;
   slug: string;
   body: any;
   collection: string;
   data: PostData
}

interface Props {
   title: string;
   description: string;
   url: string | any;
   featured_image: PostDataFeaturedImage;
   frontmatter: Post;
   robots: any;
}
```

> Check code for more!

## 🛠 Usage in astro

```javascript
---
// more personal/code imports
import SEO from '@xexiu/astro-seo';

const defaultSchema = {
    "description": "Explora mi blog para obtener información y consejos sobre desarrollo Full Stack, JavaScript, HTML, CSS, Node.js, Python, React, React Native, Blockchain, WEB3, dApps, smart contracts y más.",
    "featured_image": {
        "alt": "Bienvenid@ a mi blog de desarrollo Full Stack - Sergiu Mironescu",
        "src": "/image-default.png"
    },
    "title": "Bienvenid@ a mi blog de desarrollo Full Stack - Sergiu Mironescu"
};

const {
   title = defaultSchema.title,
   description = defaultSchema.description,
   featured_image,
   frontmatter,
   robots
} = Astro.props;
---
<!doctype html>
<html lang="es" data-current-page={Astro.url.pathname}>
   <head>
      // metas
      <SEO
         {title}
         {description}
         url={Astro.url}
         {featured_image}
         {frontmatter}
         {robots}
         {defaultSchema}
      />
      // rest
   </head>
      <body>
      // code
      </body>
</html>
```

---
> This will generate all the needed SEO as well as jsonLD generator <https://json-ld.org/>
> Demo: <https://xexiu.dev> or check examples folder in the repository <https://github.com/xexiu/astro-components>
> This prodcut is actively mantained. Any PR, issues or whatever concern, please visit the Github repository <https://github.com/xexiu/astro-components>.

##  ¡Chao pescao! 👋 🐠
