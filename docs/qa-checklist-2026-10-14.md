# Weather App — QA Checklist

- Handle denied geolocation and unavailable location services.
- Show a clear message for unknown city names and API failures.
- Avoid displaying stale weather as if it were current.
- Check missing optional fields such as icon, humidity, or wind.
- Keep units explicit and conversion behavior consistent.
- Do not expose API secrets in client-side code.