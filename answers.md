# 宜眾數數發Vue考題
1.	Simply to write down differences between one-way data flow and two-way data binding?
    >React’s one-way data flow (also called one-way binding) keeps everything modular       and fast.  Data binding 指的是資料端與 UI端之間會透過事件的綁定，當某一端有異動時，另一端可以進行更新。

    >One way data flow/one way data binding 指的是兩種資料流向，有以下兩種情況：
    >-  從資料端出發，資料一有異動，就通知 UI 端更新
    >-  從 UI 端出發，UI 一有異動，就通知資料端更新

2.	What is the different between computed, watch and method?
>computed 必須回傳一個值，並且會把它緩存起來，當函式裏的依賴改變時，才會重新執行和求值。

    >watch 與 methods 不會強制要求回傳一個值，它們只需執行動作，不一定要回傳值。

    >watch 會偵測單一個值，當它有變化時就執行。

    >methods，只要呼叫它，它就會執行，但 computed 和 watch 則不是透過呼叫來執行。
        
    

3.	List some of ES6 features and explain a bit about it.
    >arrow function：是函式的一種簡寫方式，箭頭函式中的this與函式外層的this作用域相同；
    
    >proxy：所有對 proxy 做的操作都會「透過 proxy」作用在 target 上，透過 proxy 可以讓開發者在存取到 target 前先做一下操作；
    
    >樣板字面值（Template literals）：可以包含由錢字元及花括號所構成（${expression}）的佔位符（placeholders）；
    
    >解構賦值 (Destructuring assignment) 語法是一種 JavaScript 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數。

4.	Briefing a bit about Vuex and how it works, also most of the time where were you using it?
    >vuex是利用vue的mixin混入機制，在beforeCreate鉤子前混入vuexInit方法，vuexInit方法實現了store注入vue元件實例，並註冊了vuex store的引用屬性$store。
    
    >當有某一筆資料會在很多個不同的頁面或元件中調用到的時候，就會考慮將這筆資料轉移至vuex進行處理

5.	Explain how you are using JavaScript functions such as forEach, Map, or Reduce.

    > 如果單純想遍歷陣列中的内容會使用 forEach；
    
    >如果想要修改陣列中的内容，會使用Map；
    
    >如果要把陣列內的內容作加總並最終回傳一個結果，會使用 reduce。

6.	Can you explain about Pure function, what are the properties? And can you make an example.

    >純函式是: 相同的輸入，永遠會得到相同的輸出，而且沒有任何的副作用。
    ```
    // 例如 splice & slice:
    let arr = [1, 2, 3, 4, 5];

    pure function:
    arr.slice(0, 3)  // [1, 2, 3]
    arr.slice(0,3)  // [1, 2, 3]

    not pure function:
    arr.splice(0, 3) // [1, 2, 3]
    arr.splice(0, 3) // [4, 5]
    ```

7.	What is different between framework base website and normal website (none framework)
    >1. 方便開發
    2. 資料與UI分離

8.	
```
setTimeout(b, 100)
setTimeout(d(), 1000)
a(c)
var delay = 0
for(let i=100000; i--;) delay++
e()
function a(cb){ console.log(‘a’) setTimeout(cb, 0)
}
function b(){ console.log(‘b’) }
function c(){ console.log(‘c’) }
function d(){ console.log(‘d’) }
function e(){ console.log(‘e’) }
```
> a e c b d

9.	Implementing let summary = sum(1)(2)(3), console.log(summary).
// Expected summary is 6
```
let sum = function (a) {
  return function (b) {
    return function (c) {
      return a+b+c;
    }
  }
}
let summary = sum(1)(2)(3)
console.log（summary） // => 6
```

10.	What is the result of the console log out?
```
setName = ‘global’ 
function test() {
  console.log(setName) 
  var setName = ‘local’ 
  console.log(setName)
}
```
>// => undefined local
