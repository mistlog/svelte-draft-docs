# Logic

For conditionals and loops, we have built-in `if`, `else` and `each` tag. Top level `await` is also supported.

## If and else

`else` with condition will be translated to logic `else if ...`, in this way, we don't need another tag such as `else-if`.

```typescript
export default function App()
{
    let x = 7;

    <if condition={x > 10}>
        <p>{x} is greater than 10</p>
        <else condition={5 > x}>
            <p>{x} is less than 5</p>
            <else>
                <p>{x} is between 5 and 10</p>
            </else>
        </else>
    </if>
}
```

>[4-logic/else-if-blocks/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/4-logic/else-if-blocks/App.tsx)

## each

```typescript
export interface ICat
{
    id: string;
    name: string;
}

export default function App()
{
    let cats: Array<ICat> = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];

    <h1>The Famous Cats of YouTube</h1>;

    <ul>
        <each from={cats}>
            {(cat: ICat, i: number) => (
                <li>
                    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
                        {i + 1}: {cat.name}
                    </a>
                </li>
            )}
        </each>
    </ul>;
}
```

>[4-logic/each-blocks/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/4-logic/each-blocks/App.tsx)

For keyed `each`, the convention is that the 3rd argument should be `key = ...`:

```typescript
<each from={things}>
    {(thing: IThing, index: number, key = thing.id) => (
        <Thing current={thing.color} />
    )}
</each>
```

>[4-logic/keyed-each-blocks/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/4-logic/keyed-each-blocks/App.tsx)

## await

```typescript
export default function App()
{
    let promise = getRandomNumber();

    async function getRandomNumber()
    {
        const res = await fetch(`https://svelte.dev/tutorial/random-number`);
        const text = await res.text();

        if (res.ok)
        {
            return text;
        } else
        {
            throw new Error(text);
        }
    }

    function handleClick()
    {
        promise = getRandomNumber();
    }

    <button onClick={handleClick}>
        generate random number
    </button>;

    <await>
        {{
            loading: <p>...waiting</p>,
            promise: promise
                .then(number => <p>The number is {number}</p>)
                .catch((error: Error) => <p style="color: red">{error.message}</p>)
        }}
    </await>
}
```

>[4-logic/await-blocks/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/4-logic/await-blocks/App.tsx)

The semantic of `await` is concise and straightforward in that it leverages the semantic of javascript itself. The equivalent svelte one is :

```html
{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
```