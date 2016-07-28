# ng-watch

A simple directive to re-transclude content when a value changes; for use with one-time bindings
via the `::` operator.

## Dependencies

1. AngularJS.

## Installation

* Load `watch.js`.

* Add `watch` as a dependency to your Angular module.

```javascript
  angular.module('yourModule', [
    // ... other dependencies ...
    'watch'
  ]);
```

* Use `ng-watch` in your templates.

## Example

```html
  <div ng-watch="post.timestamp">
    <h1>{{ :: post.title }}</h1>
    <h2>{{ :: post.subtitle|truncate:32 }}</h2>
    <p>
      {{ :: post.content }}
    </p>
    <ul>
      <li ng-repeat="tag in :: post.tags">
        {{ :: tag }}
      </li>
    </ul>
    <a ng-href="{{ :: post.url }}">{{ :: post.timestamp }}</a>
  </div>
```

## Testing

To build a release and run tests:

```sh
  $ npm install
  $ bower install
  $ gulp test
```

(There aren't actually any tests).
