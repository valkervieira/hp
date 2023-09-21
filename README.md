# Over Engineered Harry Potter API Coding Challange

- [Requirements](https://github.com/Prosigliere/coding-challenges/blob/main/frontend.md)
- Check it live on vercel: [hp.notoe.tech](https://hp.notoe.tech)
- Check the [recording](https://drive.google.com/file/d/1a0GJXX2wpcS-ciYE8u4dEzR6fNrAApDi/view?usp=sharing) of the initial setup freezed on the `challenge-recording` branch

## Stack

- [**Turborepo**](https://turbo.build/) For managing the monorepo
- [**Nextjs 13**](https://nextjs.org/docs) Using the app router for both routing, rendering, data fetching and caching
- [**TailwindCSS**](https://tailwindcss.com/) For styling
- [**Vercel**](https://vercel.com/) To bring it to life

## Running the app

### Requirements

- Node v18 (lts/hydrogen)
- [pnpm](https://pnpm.io/installation) ^v8.6.10 installed globally
- [Turborepo](https://turbo.build/repo/docs/installing) ^v1.10.13 installed globally

### Running the app

- `turbo dev` - will kick-off the dev script on all packages, making the NextJS app available on `localhost:3000`
- `turbo clean` - remove turbo cache and trigger the `clean` script on all packages
- `turbo build` - will build all the apps and packages for production
- `turbo {command} --filter={package/app name}` - can run turbo commands on specific apps or packages

## Monorepo structure

```
/apps
|--/web - NextJS 13 app
/packages
|--/eslint-config-custom - shared eslint configuration files
|--/tailwind-config - shared tailwind config file
|--/tsconfig - shared tsconfig files
|--/ui - shared component library using tailwind
```

## NextJS Routing Structure

- `/` redirects to `/characters`
- `/characters` redirects to `/characters/full`
- `/characters/[slug]`
  - if `slug === full`, fetch data from the `/characters` api and displays it
  - if `slug === staff`, fetch data from the `/characters/staff` api and displays it
  - if `slug === students`, fetch data from the `/characters/students` api and displays it
  - if `slug` is not one of the above, fetch data from the base`/characters` api and displays it
- `/character` redirects to `/characters`
- `/character/[slug]` fetch data from the `/character/:id` passing the slug as id



## Todo list (ordered by priority)

- [ ] Finish core functionality
  - [ ] Favorite character and display favorite list
  - [ ] Pick a favorite house
  - [ ] Make the theme based on the favorite house (optional)
- [ ] Make the app pretty!
  - [ ] Have all components styled
  - [ ] Add proper loading states
  - [ ] Use the transitions api (optional)

Plus:
- [ ] Revisit data fetching
  - [ ] Move to separated package
  - [ ] Use Suspense API
- [ ] Add good error boundaries
