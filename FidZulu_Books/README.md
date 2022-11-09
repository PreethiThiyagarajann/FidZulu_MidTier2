# FidZulu-Books-API
API to return book details

## Endpoints:
1. GET - *localhost:3032/books?location=<location_code>*
   - Default will return location=US-NC
   - Locations:
      - US-NC
      - IN
      - IE
2. GET - *localhost:3032/team*
3. POST - *localhost:3032/books*

## Sample request payload - /books
```
{
  "Title": "title1",
  "Author": "author1",
  "price": "12.34",
  "ISBN": "1234567890",
  "publisher": "publisher1"
}
```

## Sample response object - /books:
```
{
  "Title": "title1",
  "Author": "author1",
  "price": "12.34",
  "ISBN": "1234567890",
  "publisher": "publisher1"
}
```

## Response object - /team:
```
{
    "team": "Hippopotomonstrosesquippedaliophobia",
    "membersNames": [
        "Mihir Soni",
        "Vaibhav Rajendra Agrawal",
        "Rachana P Bennur"
    ]
}
```
