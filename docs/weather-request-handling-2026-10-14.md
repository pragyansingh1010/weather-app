## Weather request handling

- Validate the location field before starting a request.
- Distinguish invalid locations from network failures and rate limits.
- Show loading, success, and error states without leaving stale weather visible as current.
- Handle missing optional weather fields with readable fallbacks.
- Keep units consistent between the current conditions and forecast.