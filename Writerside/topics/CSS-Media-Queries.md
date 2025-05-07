# CSS Media Queries

The `@media` rule, introduced in `CSS2`, made it possible to define different style rules for different media types.
Media queries can be used to check many things, such as:

1. width and height of the viewport
2. orientation of the viewport (`landscape or portrait`)
3. resolution

## CSS Media Types

| Value  | Description  |
|---|---|
| all  |  Used for all media type devices |
| print  | Used for print preview mode  |
| screen  |  Used for computer screens, tablets, smart-phones etc. |

## CSS Common Media Features
Here are some commonly used media features:

| Value |	Description |
|---|---|
| orientation |	Orientation of the viewport. Landscape or portrait |
| max-height |	Maximum height of the viewport |
| min-height |	Minimum height of the viewport |
| height |	Height of the viewport (including scrollbar) |
| max-width |	Maximum width of the viewport |
| min-width |	Minimum width of the viewport |
| width	| Width of the viewport (including scrollbar) |

## Media Query Syntax

```CSS
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```