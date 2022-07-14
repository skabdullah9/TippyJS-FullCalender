import { createApp } from "vue";
import Demo from "./Demo.vue";
import "./main.css";

import VueTippy from "vue-tippy";

const app = createApp(Demo);

app.use(
    VueTippy,
    // optional
    {
        directive: "tippy", // => v-tippy
        component: "tippy", // => <tippy/>
        componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
        defaultProps: {
            placement: "auto-end",
            allowHTML: true,
            arrow: true,
            interactive: true,
        }, // => Global default options * see all props
    }
);

app.mount("body");
