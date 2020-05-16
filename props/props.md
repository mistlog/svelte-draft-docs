# Props

We use props in React style. The first param is used as props for type check, and destructuring assignment is necessary to "declare" props.

```typescript
export interface INestedProps
{
    answer: number;
}

export default function Nested(props: INestedProps)
{
    const { answer } = props;
    
    <p>The answer is {answer}</p>
}
```

>[3-props/declaring-props/Nested.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/declaring-props/Nested.tsx)

## Default props

We can specify default values for props:

```typescript
export interface INestedProps
{
    answer?: string | number;
}

export default function Nested(props: INestedProps)
{
    const { answer = "a mystery"} = props;

    <p>The answer is {answer}</p>
}
```

>[3-props/default-values/Nested.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/default-values/Nested.tsx)

## Spread props

Spreading props is also supported:

```typescript
import Info from './Info';

export default function App()
{
    const pkg = {
        name: 'svelte',
        version: 3,
        speed: 'blazing',
        website: 'https://svelte.dev'
    };

    <Info {...pkg}/>
}
```

>[3-props/spread-props/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/spread-props/App.tsx)