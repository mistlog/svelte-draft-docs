# Introduction

In SvelteDraft, a component is written into a `.tsx` file and the default export would be the component:

``` typescript
export default function App()
{
    <h1>Hello world!</h1>
}
```
> [1-introduction/basics/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/basics/App.tsx)

## Adding data

It follows the raw svelte style and the difference is that it uses JSX, however, you don't need to return JSX as we do in React.

```typescript
export default function App()
{
    let name = 'world';

    <h1>Hello {name.toUpperCase()}!</h1>
}
```
>[1-introduction/adding-data/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/adding-data/App.tsx)

Example for dynamic attributes:

```typescript
export default function App()
{
    let src = 'https://svelte.dev/tutorial/image.gif';
    let name = 'Rick Astley';

    <img src={src} alt={`${name} dances.`} />
}
```

>[1-introduction/dynamic-attributes/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/dynamic-attributes/App.tsx)

## Styling
By convention, `.css` file with the same name as `.tsx` will be used as style for that component:

> [1-introduction/styling](https://github.com/mistlog/svelte-draft-tutorial/tree/master/src/examples/1-introduction/styling)

## Reuse component

We can reuse component by importing it:

```typescript
import Nested from './Nested';

export default function App()
{
    <p>This is a paragraph.</p>;
    <Nested />
}
```
>[1-introduction/nested-components/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/nested-components/App.tsx)

```typescript
export default function Nested()
{
    <p>This is another paragraph.</p>
}
```

>[1-introduction/nested-components/Nested.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/1-introduction/nested-components/Nested.tsx)