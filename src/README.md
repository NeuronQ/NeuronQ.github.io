## Requirements

Nodejs global deps:

```
npm install -g concurrently
npm install -g lite-server
```

## How to tun local HTTP server and auto-recompile on change

```
npm start
```

**Note:** If using **Sublime Text** on Windows 8 or 10, set `"atomic_save": true` to prevent weird gulp watch issues (mostly regarding gulp-sass).

### How to build

```
npm build
```

(alias of `gulp`)

### How to run local HTTP server

```
npm serve
```

(alias of `lite-server`)

### How to auto-rebuild on change

```
npm watch
```

(alias of `gulp watch`)
