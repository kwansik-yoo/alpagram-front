# 1. 프로젝트 초기 설정

## 1.1. Table Of Content

- [1. 프로젝트 초기 설정](#1-프로젝트-초기-설정)
    - [1.1. Table Of Content](#11-table-of-content)
    - [1.2. Monorepo 구성](#12-monorepo-구성)
        - [1.2.1. package.json](#121-packagejson)
        - [1.2.2. 하위 레포](#122-하위-레포)
            - [1.2.2.1. types](#1221-types)
            - [1.2.2.2. apis](#1222-apis)
            - [1.2.2.3. hooks](#1223-hooks)
            - [1.2.2.4. components](#1224-components)
            - [1.2.2.5. pages](#1225-pages)
        - [1.2.3. eslint 적용](#123-eslint-적용)
    - [1.3. Mock-server 구성하기](#13-mock-server-구성하기)
        - [1.3.1. json-server 설치](#131-json-server-설치)
        - [1.3.2. mock data 준비](#132-mock-data-준비)
        - [1.3.3. mock script 추가](#133-mock-script-추가)


## 1.2. Monorepo 구성

```
root
+-- package.json     #monorepo    
+-- packages         
    +-- types
    +-- apis   
    +-- hooks
    +-- components
    +-- pages
```

### 1.2.1. package.json
```
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

### 1.2.2. 하위 레포

#### 1.2.2.1. types
```
cd packages
yarn create vite types --template vanilla-ts
```   

> 모든 type을 관리하는 패키지로, type만 제공한다.

#### 1.2.2.2. apis
```
cd packages
yarn create vite apis --template vanilla-ts
```   

> api를 관리하는 패키지로, api를 함수로 제공한다.

#### 1.2.2.3. hooks
```
cd packages
yarn create vite hooks --template react-ts
```   

> hook을 관리하는 패키지로, hook을 함수로 제공한다.

#### 1.2.2.4. components
```
cd packages
yarn create vite components --template react-ts
```   

> component를 관리하는 패키지로, component를 ReactElement로 제공한다.

#### 1.2.2.5. pages
```
cd packages
yarn create vite pages --template react-ts
```   

> page를 관리하는 패키지로, page를 js 번들로 제공한다.

### 1.2.3. eslint 적용
```
cd root
npm init @eslint/config
```   

- .eslint.json 수정
```diff  
{
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
+        "project": [
+            "./packages/types/tsconfig.json",
+            "./packages/apis/tsconfig.json",
+            "./packages/hooks/tsconfig.json",
+            "./packages/components/tsconfig.json",
+            "./packages/pages/tsconfig.json"
+        ]
    },
}
```

## 1.3. Mock-server 구성하기

### 1.3.1. json-server 설치

```
cd root
yarn add -D -W json-server
```

### 1.3.2. mock data 준비
```
root
+-- mock-server
    +-- db.json     
    +-- mock.js
```

### 1.3.3. mock script 추가  

```diff
// package.json   
{
  "scripts": {
+    "mock-db": "node mock-server/mock.js > mock-server/db.json",
+    "mock-server": "json-server -w -p 9000 mock-server/db.json"
  }
}
```






