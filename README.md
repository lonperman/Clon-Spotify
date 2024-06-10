# Clon Spotify
### Technologies utilices in the following project.
- Astro 3
- React JS
- Svelte
- TailwindCSS
#### ¿How to create a project in Astro?

```sh
npm create astro@latest
```
After creating the project you can execute the following commands in the terminal.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

For convenience when developing with astro, it's recommended to install the astro extension in the text editor, in my case visual studio code.
- Astro extension -> [Astro Link 🚀](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)  

----

### Add TailwindCSS to the Project    
In order to add TailwindCSS to the project, we will first run the following command in the terminal, to see the different options that astro offers: 
```sh
npx astro add --help
```    
| Title                   | Option                                           |
| :------------------------ | :----------------------------------------------- |
| `Flags`             | `--yes`  (Accept all prompts.), `--help` (show this help message)                            |
| `UI Frameworks`             |  `react` (astro add react), `preact` (astro add preact), `svelte` (astro add svelte)     |
| `Documentation Frameworks`           | `starlight` (astro add starlight)       |
| `SSR Adapters`         | `netlify` (astro add netlify), `vercel` (astro add vercel), `node` (astro add node)    |
| `Others`       | `db` (astro add db), `tailwind` (astro add tailwind), `markdoc` (astro add markdoc) |        

We run the following command:
```sh
npx astro add tailwind
```    
Here are some characteristics about tailwind and how it is applied in projects.
```html
<div
    id="playlist-container"
    class="relative
		transition-all
		duration-100
		bg-green-600"
  >
    <!--<PageHeader /> -->
    <div class="relative z-10 px-6 pt-10">
      <Greeting />
      <div class="flex flex-wrap mt-6 gap-4">
        {playlists.map((playlist) => <PlayListItemCard playlist={playlist} />)}
      </div>
      <div class="absolute
			inset-0
			bg-gradient-to-t
			from-zinc-900
			via-zinc-900/80
			-z-[1]
			">
      </div>
    </div>
  </div>
```
| Class                   | Properties                                           |
| :------------------------ | :----------------------------------------------- |
| `flex-wrap` | flex-wrap: wrap;                     |
| `relative`             | position: relative;                            |
| `transition-all`             | transition-property: all;         transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);          transition-duration: 150ms;      |
| `duration-100`           | transition-duration: 100ms;          |
| `bg-green-600`         | background-color: rgb(22 163 74);     |
| `z-10`       | z-index: 10; |
| `px-6` | padding-left: 1.5rem; /* 24px */ -- padding-right: 1.5rem; /* 24px */                     |
| `pt-10` | padding-top: 2.5rem; /* 40px */                     |
| `mt-6` | margin-top: 1.5rem; /* 24px */                     |
- More Info -> [Link 🔬](https://tailwindcss.com/docs/flex-basis)  

```sh
npx astro add svelte
```    
For install React in the project, run the following command:
```sh
npx astro add react
```  
For install Zustand in the project, run the following command:
```sh
npm install zustand
```
For install Slider in the project, run the following command:
```sh
npm install @radix-ui/react-slider
```