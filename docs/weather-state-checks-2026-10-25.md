## Weather state checks

- Validate the location before making a request.
- Show loading feedback while the request is pending.
- Distinguish network errors from locations that cannot be found.
- Handle missing weather fields without displaying `undefined`.
- Avoid showing stale data as though it belongs to a new search.