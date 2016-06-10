# ember-leaflet-cartodb

Ember-Leaflet CartoDB.js layer component  
`{{cartodb-layer url='...'}}`

## Installation

This component only works when using [ember-leaflet], so install that first.

```shell
ember install ember-leaflet-cartodb
```

## Usage

```hbs
{{#leaflet-map lat=lat lng=lng zoom=zoom as |layers|}}
  {{layers.tile url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'}}
  {{cartodb-layer url='http://documentation.cartodb.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json' legends=false zIndex=1}}
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

[ember-leaflet]: http://www.ember-leaflet.com/
[CONTRIBUTING.md]: CONTRIBUTING.md
