# Weather UI States

Weather requests should expose loading, success, empty, and error states. Preserve the previous successful reading until a replacement response is ready, and never expose API credentials in client-visible messages.