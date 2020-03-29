
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/igniter.js',
  output: [
  {
    file: 'dist/igniter.dist.js',
    format: 'iife',
    name: 'Igniter',
    globals: {}
  },
  {
    file: 'dist/igniter.dist.min.js',
    format: 'iife',
    name: 'Igniter',
    plugins: [terser()],
    globals: {}
  }
  ],
  external: [],
}

/*
  ---------
  Generator
  ---------
 */

// var v = {}; var t = "";
// for(let ny of a) {
// 	var z = document.createElement(ny).constructor.name;
// 	var nodename = "Super"+z.substring(4, z.length);
// 	v[nodename] = `
// const ${nodename} = NodeConstructor;
// Object.setPrototypeOf(${nodename}.prototype, ${z}.prototype);
// Object.setPrototypeOf(${nodename}, ${z});
// `;
// 	t += `
// export class ${(ny[0].toUpperCase() + ny.slice(1))} extends ${nodename} {
// 		constructor(o) {
// 			if(o) {
// 				o.tag = "${ny}";
// 				o.is_native = false;
// 			} else {
// 				o = {
// 					is_native: true,
// 					from: ${z},
// 				};
// 			}
// 			super(o);
// 		}
// 	}`;
// }
// var s = "";
// for(let ny in v) {s+=v[ny];}
// console.log(s);
// console.log(t);
