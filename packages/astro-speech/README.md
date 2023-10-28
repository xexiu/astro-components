# 🚀 `astro-speech`

[![NPM](https://img.shields.io/npm/v/@xexiu/astro-speech)](https://www.npmjs.com/package/@xexiu/astro-speech)
![Downloads](https://img.shields.io/npm/dt/@xexiu/astro-speech.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xexiu/astro-components/pulls)
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

## HELLO there 👋

- Twitter: <https://twitter.com/xexiudev> drop by and say hi, follow me and I follow you. Let's build a community.

> **HTML, CSS and a bit of javascript made with Custom Elements article speech for astro.** Uses API from browsers. Compatible with web/mobile, responsive, HTML, SEO friendly. Lighthouse score 100%.
> Uses Custom Elements for a better optimization: `customElements.define('xe-article-speech', ArticleSpeech);`
---
> Forking and giving a star will contribute to my motivation in making components for astro (react, react-native, etc...) that are purely HTML, CSS, SEO friendly and responsive :) (almost all components :P).
---
> **DEMO**: [Astro Article Specch](https://xexiu.dev/demos/astro/article-speech)
> This product is actively mantained. Any PR, issues or whatever concern, please visit the Github repository <https://github.com/xexiu/astro-components>.

## Tutorials Roadmap

- **Web2**: JavaScript, HTML, CSS, Node.js, Python (MLL, AI), React, NextJS React Native and more.
- **Web3**: Blockchain, WEB3, dApps, smart contracts and more.

## 📦 Installation

- Using bun:

``` javascript
bun i @xexiu/astro-speech
```

- Using npm:

```javascript
npm i @xexiu/astro-speech
```

## 🔁 API

- Props:

```javascript
interface Props {
  classes?: string; // Optional
  title: string; // Optional
  text: string; // Requiered
  btnClasses?: string; // Optional
  btnText?: any; // Optional
}
```

> Check code for more!

## 🛠 Usage in astro (client)

```javascript
---
// more personal/code imports
import AstroSpeech from '@xexiu/astro-speech';
---

<div class="container">
    <p class="get-me">Whatever text...</p>
</div>

<AstroSpeech
    text={document.querySelector('.get-me').textContent}
    btnText="Escuchar"
/>
```

## 🛠 Usage in astro (Server)

```javascript
---
// more personal/code imports
import AstroSpeech from '@xexiu/astro-speech';

const blogs = {
   latest: [
      {
         id: 'post-3.md',
         slug: 'post-3',
         body:
        '\n' +
        'TEST3\n' +
        '\n' +
        'Nisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia.\n' +
        '\n' +
        '## Kinda Sus\n' +
        '\n' +
        '  ![Pica](/src/images/pic_ts.jpeg)\n' +
        '\n' +
        '  Ad ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt.\n' +
        '\n' +
        '  ```js\n' +
        '  test()\n' +
        '  ```\n' +
        '\n' +
        '  Officia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex.\n' +
        '\n' +
        '## Is anyone reading these?\n' +
        '\n' +
        '  Ipsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa. Nulla ex velit adipisicing proident fugiat deserunt sunt eu adipisicing sint incididunt quis qui. Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo.\n' +
        '\n' +
        '  Labore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.\n' +
        '\n' +
        '  ![alt text](/src/images/hero-img.png "alt title")\n' +
        ''
      }
   ]
};
---

<div class="container">
    <p class="get-me">Whatever text...</p>
</div>

<AstroSpeech
    text={blogs.latest[0].body}
    btnText="Escuchar"
/>
```

---

##  ¡Chao pescao! 👋 🐠
