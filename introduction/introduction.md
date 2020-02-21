# Introduction

> [1-introduction/basics/App.svelte.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/basics/App.svelte.tsx)

In SvelteDraft, a component is written into a `.svelte.tsx` file and the default export would be the component:

``` typescript
export default function App()
{
    <h1>Hello world!</h1>
}
```

## Adding data

>[1-introduction/adding-data/App.svelte.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/adding-data/App.svelte.tsx)

It follows the raw svelte style and the difference is that it use JSX, however, you don't need to return JSX as we do in React.

```typescript
export default function App()
{
    let name = 'world';

    <h1>Hello {name.toUpperCase()}!</h1>
}
```

