---
title: "How to setup absolute import in react"
date: 2023-11-11T14:20:00+00:00
---

React components imports can have a very very long relative file path if you are in a big project, here is how to solve the issue instead of writing a lot of .. .. .. and ..
Credits to [Eric Murphy](https://www.youtube.com/watch?v=i4MkDjAD49E)

For example you have
```js
import React from "react";
import Button from "../../../components/Button";
import logo from "../../../../logo.svg";

const NestedComponent = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <Button />
        </div>
    );
};

export default NestedComponent;
```

Assuming your components folder and logo.svg is in `src` folder

src  
|--- logo.svg  
|--- components  
        |--- Button.js  

You can change your import to
```js
import Button from "components/Button";
import logo from "logo.svg";
```
But this ain't gonna work, so we need to create `jsconfig.json` in root directory

```json
// jsconfig.json

{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

If you are using Typescript, compilerOptions object will already be in tsconfig.json. Then just add `"baseUrl": "src"` to the object
