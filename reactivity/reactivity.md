# Reactivity

In SvelteDraft, we don't use "$" to denote reactivity, instead we use DSL watch. In typedraft, [DSL](https://github.com/mistlog/typedraft-docs/blob/master/concepts/concepts.md#dsl) is a way to transform code locally.

```typescript
export default function App()
{
    let count = 0;

    <AlertAndResetCount/>;

    function handleClick() {
        count += 1;
    }

    <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
}

function AlertAndResetCount(count: number)
{
    "use watch";
    
    if (count >= 10) {
        alert(`count is dangerously high!`);
        count = 9;
    }
}
```

>[2-reactivity/reactive-statements/App.tsx](https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/2-reactivity/reactive-statements/App.tsx)

Everything inside `AlertAndResetCount` will be wrapped by "$":

```typescript
...

let count = 0;

$: {
    if (count >= 10) {
        alert(`count is dangerously high!`);
        count = 9;
    }
}

function handleClick() {
    count += 1;
}
...
```