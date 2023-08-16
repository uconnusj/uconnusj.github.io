# UConn Undergraduate Student Journal

This is a website used by the Undergraduate Science Journal at UConn to showcase the amazing research being done by undergraduate students at our university. All research papers are peer-reviewed before being published.

## Quick start

```bash
yarn # install dependencies
yarn dev # starts server on port
```

## Contributors
Aditya Chandraker<br />
Siddharth Sinha

## Dependencies

```bash
yarn create vite
# (https://vitejs.dev/) 
# (https://reactjs.org/) 
# (https://www.typescriptlang.org/)

yarn add bulma 
# CSS framework 
# (https://bulma.io/)

yarn add react-router-dom 
# routing 
# (https://reactrouter.com/)
```


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
