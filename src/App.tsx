import { css } from "emotion";
import { MenuItem, Menu } from "svelte-element";
import { Router, Route } from "svelte-routing";
import NavLink from "./lib/NavLink";
import { R1C2 as Skeleton } from "svelte-element/build/prefab/index";
import Introduction from "./tutorial/introduction/index.svx";
import Reactivity from "./tutorial/reactivity/index.svx";
import Props from "./tutorial/props/index.svx";
import Logic from "./tutorial/logic/index.svx";
import Events from "./tutorial/events/index.svx";
import Binding from "./tutorial/binding/index.svx";
import Lifecycle from "./tutorial/lifecycle/index.svx";
import Action from "./tutorial/action/index.svx";
import Context from "./tutorial/context/index.svx";
import Slot from "./tutorial/slot/index.svx";
import Store from "./tutorial/store/index.svx";

export default function _() {

    const resolveComponentName = (location: { pathname: string }) => {
        const segments = location.pathname.split("/");
        const name = segments[segments.length - 1];
        //@ts-ignore
        if (__BuildEnv__ === "prod") {
            return name === "" || name === "svelte-draft-docs" ? "introduction" : name;
        }

        return name === "" ? "introduction" : name;
    };

    let basepath = "/";

    //@ts-ignore
    if (__BuildEnv__ === "prod") {
        basepath = "/svelte-draft-docs";
    }

    const container = css`height:100%; width:100%`;

    const style = {
        sidebar: {
            container: css`height:100%`,
            menu: css`height:100%`
        },
        tutorial: css`
            p > code, li > code {
                color: #1a1a1a;
                background-color: rgba(255,229,100,0.2);
                font-size: 0.94em;
                font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace
            }
            
            p > a, li > a {
                background-color: rgba(187,239,253,0.3);
            }
    
            p > a, li > a {
                color: #1a1a1a;
                text-decoration: none
            }
    
            p > a:hover, li > a:hover {
                color: #409eff;
            }
            
            padding: 10px 30px;

            pre.language-bash,
            pre.language-html,
            pre.language-tsx,
            pre.language-ts {
                display: inline-block;
            }
        `
    };

   
    //  <MenuItem key="article">Article</MenuItem>

    <main class={container}>
        <Skeleton >
            <div class={css`display: flex`} slot="logo">
                <img src="logo.svg" alt="logo" width={30} height={30} />
                <span style="font-size: 24px; font-weight: 400; padding-left: 10px">Svelte Draft</span>
            </div>
            <div slot="menu">
                <Menu defaultSelected="tutorial" mode="horizontal">
                    <MenuItem key="tutorial">Tutorial</MenuItem>
                </Menu>
            </div>
            <div slot="sidebar" class={style.sidebar.container}>
                <Router basepath={basepath}>
                    <Route path="/*">
                        {({ location }: { location: any }) => (
                            <Menu defaultSelected={resolveComponentName(location)} className={style.sidebar.menu}>
                                <NavLink to="/">
                                    <MenuItem key="introduction">Introduction</MenuItem>
                                </NavLink>
                                <NavLink to="reactivity">
                                    <MenuItem key="reactivity">Reactivity</MenuItem>
                                </NavLink>
                                <NavLink to="props">
                                    <MenuItem key="props">Props</MenuItem>
                                </NavLink>
                                <NavLink to="logic">
                                    <MenuItem key="logic">Logic</MenuItem>
                                </NavLink>
                                <NavLink to="events">
                                    <MenuItem key="events">Events</MenuItem>
                                </NavLink>
                                <NavLink to="binding">
                                    <MenuItem key="binding">Binding</MenuItem>
                                </NavLink>
                                <NavLink to="lifecycle">
                                    <MenuItem key="lifecycle">Lifecycle</MenuItem>
                                </NavLink>
                                <NavLink to="action">
                                    <MenuItem key="action">Action</MenuItem>
                                </NavLink>
                                <NavLink to="context">
                                    <MenuItem key="context">Context</MenuItem>
                                </NavLink>
                                <NavLink to="slot">
                                    <MenuItem key="slot">Slot</MenuItem>
                                </NavLink>
                                <NavLink to="store">
                                    <MenuItem key="store">Store</MenuItem>
                                </NavLink>
                            </Menu>
                        )}
                    </Route>
                </Router>
            </div>
            <div slot="content" class={style.tutorial}>
                <Router basepath={basepath}>
                    <Route path="/" component={Introduction} />
                    <Route path="/reactivity" component={Reactivity} />
                    <Route path="/props" component={Props} />
                    <Route path="/logic" component={Logic} />
                    <Route path="/events" component={Events} />
                    <Route path="/binding" component={Binding} />
                    <Route path="/lifecycle" component={Lifecycle} />
                    <Route path="/action" component={Action} />
                    <Route path="/context" component={Context} />
                    <Route path="/slot" component={Slot} />
                    <Route path="/store" component={Store} />
                </Router >
            </div>
        </Skeleton >
    </main>
}