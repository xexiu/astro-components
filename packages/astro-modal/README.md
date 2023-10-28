# 🚀 `astro-modal`

[![NPM](https://img.shields.io/npm/v/@xexiu/astro-modal)](https://www.npmjs.com/package/@xexiu/astro-modal)
![Downloads](https://img.shields.io/npm/dt/@xexiu/astro-modal.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xexiu/astro-components/pulls)
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

## HELLO there 👋

- Twitter: <https://twitter.com/xexiudev> drop by and say hi, follow me and I follow you. Let's build a community.

> **Pure HTML and CSS simple modal for astro.** Uses API from browsers. Compatible with web/mobile, responsive, HTML5 semantic, SEO friendly. Lighthouse score 100%. No-Javascript.
---
> Forking and giving a star will contribute to my motivation in making components for astro (react, react-native, etc...) that are purely HTML, CSS, SEO friendly and responsive :) (almost all components :P).
---

> **DEMO**: [Astro Modal](https://xexiu.dev/demos/astro/modal)
> This product is actively mantained. Any PR, issues or whatever concern, please visit the Github repository <https://github.com/xexiu/astro-components>.

## Tutorials Roadmap

- **Web2**: JavaScript, HTML, CSS, Node.js, Python (MLL, AI), React, NextJS React Native and more.
- **Web3**: Blockchain, WEB3, dApps, smart contracts and more.

## 📦 Installation

- Using bun:

``` javascript
bun i @xexiu/astro-modal
```

- Using npm:

```javascript
npm i @xexiu/astro-modal
```

## 🔁 API

```javascript
export interface Props {
    id: string; // Required string
    ariaLabel: string; // Required string for good practices Lighthouse
    btnCloseAriaLabel: string; // Required string for good practices Lighthouse
    classes?: string; // Optional
    modalBtnClass?: string; // Optional
    headerClass?: string; // Optional
    sectionClass?: string; // Optional
    footerClass?: string; // Optional
    closeBtnClass?: string; // Optional
    btnText?: string; // Optional (if NOT Provided a close mark (X) will show on pop-up modal)
}
```

## 🛠 Usage in astro

```javascript
---
// more personal/code imports
import Modal from '@xexiu/astro-modal';
---

<div>Whatever text/html</div>

<Modal id="myAwsomeModal" ariaLabel="Share on social" btnCloseAriaLabel="Close Modal">
    <div slot="open-modal-button">Open Modal</div>

    <h2 slot="modal-title">Modal Title</h2>

    <div slot="modal-main">
        <h4>Modal Main</h4>
        <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nesciunt
    placeat officia, aliquid enim corrupti error repellat iusto corporis
    commodi ad natus ratione aut iure nisi deserunt soluta quam iste!
        </p>
    </div>

    <div slot="modal-footer">Modal Footer</div>
</Modal>
```

> If classes are NOT specified, the modal has default styles.
---

##  ¡Chao pescao! 👋 🐠
