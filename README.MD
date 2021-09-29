Building a React app with Parcel, Typescript, SASS, and ESLint
### Update
Must create declarations.d.ts file to be able to use png,svg files.
```php
declare module "*.png";
declare module "*.svg" {
  const content: string;
  export default content;
}
```
