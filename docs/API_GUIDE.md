# Weather API Guide

## Integration Goals

Keep API requests isolated from presentation logic where practical and never commit credentials to source control.

## Error States

- Loading weather data.
- Invalid or unknown location.
- Network/API failure.
- Missing optional weather fields.

## Security

API credentials should be stored outside client-side source code and rotated if they have been exposed.
