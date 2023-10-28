# 🚀 `astro-tabs`

[![NPM](https://img.shields.io/npm/v/@xexiu/astro-tabs)](https://www.npmjs.com/package/@xexiu/astro-tabs)
![Downloads](https://img.shields.io/npm/dt/@xexiu/astro-tabs.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xexiu/astro-components/pulls)
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

## HELLO there 👋

- Twitter: <https://twitter.com/xexiudev> drop by and say hi, follow me and I follow you. Let's build a community.

> **Pure HTML and CSS simple dynamic tabs for astro.** Uses API from browsers. Compatible with web/mobile, responsive, HTML5 semantic, SEO friendly. Lighthouse score 100%. No-Javascript
---
> Forking and giving a star will contribute to my motivation in making components for astro (react, react-native, etc...) that are purely HTML, CSS, SEO friendly and responsive :) (almost all components :P).
---

> **Demo**: [Astro Tabs](https://xexiu.dev/demos/astro/tabs)
> This product is actively mantained. Any PR, issues or whatever concern, please visit the Github repository <https://github.com/xexiu/astro-components>.

## Tutorials Roadmap

- **Web2**: JavaScript, HTML, CSS, Node.js, Python (MLL, AI), React, NextJS React Native and more.
- **Web3**: Blockchain, WEB3, dApps, smart contracts and more.

## 📦 Installation

- Using bun:

``` javascript
bun i @xexiu/astro-tabs
```

- Using npm:

```javascript
npm i @xexiu/astro-tabs
```

## 🔁 API

```javascript
export interface Props {
    tabTitles: string[]; // Required array
    keys: string[]; // Required array
    classes?: string; // Optional
    tabsNavClass?: string; // Optional
    panelsContainerClass?: string; // Optional
    panelClass?: string; // Optional
    tabTitleClasses?: string; // Optional
}
```

## 🛠 Usage in astro

```javascript
const blogs = {
    latest: [{
        id: 1,
        title: "Test 1",
    }],
    pinned: [{
        id: 2,
        title: "Test 2",
    }],
    private: [{
        id: 3,
        title: "Test 3",
    }]
}
---
// more personal/code imports
import Tabs from '@xexiu/astro-tabs';

const keys = Object.keys(blogs); // ['latest', 'pinned', 'private']
---

<div>Whatever text/html</div>
<Tabs {keys} tabTitles={['Title for Latest', 'Title for Private', 'Title for Pinned']}>
    {
        (key: string) => {
            return (
                <Fragment>
                    <div>{blogs[key].id}</div> // 1, 2, 3
                    <div>{blogs[key].title}</div> // Test 1, Test 2, Test 3
                </Fragment>
            );
        }
    }
</Tabs>
```

> If classes are NOT specified, the tabs have default styles.
---

##  ¡Chao pescao! 👋 🐠
