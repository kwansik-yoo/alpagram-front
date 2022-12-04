# 프로젝트 초기 설정       

## Monorepo 구성     

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

### package.json      
```
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

### 하위 레포

#### types      
```
cd packages
yarn create vite types --template vanilla-ts
```   

> 모든 type을 관리하는 패키지로, type만 제공한다.      

#### apis   
```
cd packages
yarn create vite apis --template vanilla-ts
```   

> api를 관리하는 패키지로, api를 함수로 제공한다.      

#### hooks    
```
cd packages
yarn create vite hooks --template react-ts
```   

> hook을 관리하는 패키지로, hook을 함수로 제공한다.    

#### components    
```
cd packages
yarn create vite components --template react-ts
```   

> component를 관리하는 패키지로, component를 ReactElement로 제공한다.   

#### pages    
```
cd packages
yarn create vite pages --template react-ts
```   

> page를 관리하는 패키지로, page를 js 번들로 제공한다.   

### eslint 적용      
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



