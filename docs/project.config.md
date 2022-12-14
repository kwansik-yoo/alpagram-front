# 프로젝트 초기 설정

## Table Of Content

- [1. Monorepo 구성](#1-monorepo-구성)
  - [1.1. package.json](#11-packagejson)
  - [1.2. 하위 레포](#12-하위-레포)
    - [1.2.1. types](#121-types)
    - [1.2.2. apis](#122-apis)
    - [1.2.3. hooks](#123-hooks)
    - [1.2.4. components](#124-components)
    - [1.2.5. pages](#125-pages)
  - [1.3. eslint 적용](#13-eslint-적용)


## 1. Monorepo 구성

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

### 1.1. package.json
```
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

### 1.2. 하위 레포

#### 1.2.1. types
```
cd packages
yarn create vite types --template vanilla-ts
```   

> 모든 type을 관리하는 패키지로, type만 제공한다.

#### 1.2.2. apis
```
cd packages
yarn create vite apis --template vanilla-ts
```   

> api를 관리하는 패키지로, api를 함수로 제공한다.

#### 1.2.3. hooks
```
cd packages
yarn create vite hooks --template react-ts
```   

> hook을 관리하는 패키지로, hook을 함수로 제공한다.

#### 1.2.4. components
```
cd packages
yarn create vite components --template react-ts
```   

> component를 관리하는 패키지로, component를 ReactElement로 제공한다.

#### 1.2.5. pages
```
cd packages
yarn create vite pages --template react-ts
```   

> page를 관리하는 패키지로, page를 js 번들로 제공한다.

### 1.3. eslint 적용
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




