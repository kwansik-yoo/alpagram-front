# Mock Server 구성하기

## Table Of Content

- [1. json-server 설치](#1-json-server-설치)
- [2. mock data 준비](#2-mock-data-준비)
- [3. mock script 추가](#3-mock-script-추가)

## 1. json-server 설치

```
cd root
yarn add -D -W json-server
```

## 2. mock data 준비
```
root
+-- mock-server
    +-- db.json     
    +-- mock.js
```

## 3. mock script 추가  

```diff
// package.json   
{
  "scripts": {
+    "mock-db": "node mock-server/mock.js > mock-server/db.json",
+    "mock-server": "json-server -w -p 9000 mock-server/db.json"
  }
}
```






