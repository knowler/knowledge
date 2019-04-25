# HTTP

## Request 

```
GET / HTTP/1.1
Host: example.com
```

```
{method} {uri} {protocol-version}
Host: {host}
{headers...}
```

## Response

```
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
```

```
{protocol-version} {status-code} {status-message}
{headers...}

{body}
```
