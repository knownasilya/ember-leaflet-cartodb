# ember-leaflet-cartodb

Ember-Leaflet CartoDB.js layer component  
`{{cartodb-layer url='...'}}`

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

## Installation

This component only works when using [ember-leaflet], so install that first.

```shell
ember install ember-leaflet-cartodb
```

## Usage

```hbs
{{#leaflet-map lat=lat lng=lng zoom=zoom as |layers|}}
  {{layers.tile url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'}}
  {{cartodb-layer url='http://nacis-workshop.cartodb.com/api/v2/viz/569d1940-336d-11e3-af98-5f54611e93d5/viz.json' zIndex=1}}
{{/leaflet-map}}
```

## API

### `{{cartodb-layer}}`

A layer that takes a CartoDB viz url and renders it on the map.

#### `url`

Takes a `string`, in the following form:

> http://documentation.cartodb.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json

#### `legends`

Disable the legend that comes from CartoDB. Defaults to `true` (enabled).

#### `zIndex`

Set the ordering of the layer compared to other layers used.


## Contributing

[CONTRIBUTING.md]



[npm-badge-img]: https://badge.fury.io/js/ember-leaflet-cartodb.svg
[npm-badge-link]: http://badge.fury.io/js/ember-leaflet-cartodb
[travis-badge]: https://travis-ci.org/knownasilya/ember-leaflet-cartodb.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-leaflet-cartodb
[ember-observer-badge]: http://emberobserver.com/badges/ember-leaflet-cartodb.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-leaflet-cartodb
[ember-leaflet]: http://www.ember-leaflet.com/
[CONTRIBUTING.md]: CONTRIBUTING.md
