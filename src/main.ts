import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CompositionApi from "@vue/composition-api";

Vue.use(CompositionApi);

Vue.config.productionTip = false;

let arr: [string, number] = ["1", 1];
arr = ["1", 1];
console.log(arr);

enum Color {red, green, blue}
const ty: string = Color[0];
console.log(ty);

const notSure: any = 4;
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

function test(T: object) {
  // console.log(1);
  return T;
}
test({});

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://test.com");
xhr.onreadystatechange = (ev: Event) => {
  console.log(ev);
};

const o = {
  a: 1,
  b: 2
};
const {a: na, b: nb} = o;
console.log(na);
console.log(nb);

interface PropType {
  a: string;
  b?: string;
}
function test2(T: PropType) {
  return T;
}
test2({a: "a"});

interface SquareConfig {
  color?: string;
  width?: number;
  [prop: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = {color: "white", area: 100};
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// eslint-disable-next-line
let mySquare = createSquare({color: "black"});

interface FuncType {
  (a: string, b: number): boolean;
}
const myFunc: FuncType = function(a, b) {
  if(a) {
    return false;
  }
  if(b) {
    return true;
  }
  return true;
};
myFunc("1", 1);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
