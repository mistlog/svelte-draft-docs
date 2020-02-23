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

>[3-props/declaring-props/Nested.svelte.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/declaring-props/Nested.svelte.tsx)

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

>[3-props/default-values/Nested.svelte.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/default-values/Nested.svelte.tsx)
## Spread props

Spreading props is also supported:

```typescript
import Info from './Info.svelte';

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

>[3-props/spread-props/App.svelte.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/3-props/spread-props/App.svelte.tsx)