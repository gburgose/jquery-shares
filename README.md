# jQuery Shares v1.0.3

## Installation

#### NPM

```
npm install jquery-shares --save-dev
```

#### Webpack

```js
require('jquery-shares');
```

#### jQuery

```js
$(document).ready(function(){
  $('a.share').shares();
});
```

#### HTML

On **facebook**, you should only share the url.

```html
<a href="https://www.facebook.com" class="share facebook"><i class="fa fa-facebook"></i></a>
```

On **Twitter**, you should add the address url and attribute data-text.

```html
<a href="https://www.twitter.com" data-text="The best thing that can be shared is knowledge." class="share twitter"><i class="fa fa-twitter"></i></a>
```

On **Linkedin**, you should add the address url and attribute data-text.

```html
<a href="https://www.linkedin.com" data-text="The best thing that can be shared is knowledge." class="share linkedin"><i class="fa fa-linkedin"></i></a>
```
On **GooglePlus**, you should only share the url.

```html
<a href="https://plus.google.com/" class="share google-plus"><i class="fa fa-google-plus"></i></a>
```