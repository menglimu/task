// import { transform } from "@babel/core";
// transform("const a = 1;", (...res) => {
//   console.log(res);
// });
// import parser from "@babel/parser";
// import traverse from "@babel/traverse";
import { traverse, parse, transformSync, transform } from "@babel/core";
import generate from "@babel/generator";
// console.log(generator);

// const { default: generate } = generator;
const code = `function square(n) {
  return n * n;
}`;
// const res = transformSync(code, {
//   plugins: [
//     {
//       visitor: {
//         FunctionExpression(path) {
//           if (path.isIdentifier({ name: "n" })) {
//             // path.node.name = "x";
//             path;
//           }
//         },
//       },
//     },
//   ],
//   // enter(path) {
//   //   if (path.isIdentifier({ name: "n" })) {
//   //     path.node.name = "x";
//   //   }
//   // },
// });
// console.log(res);

const ast = parse(code);
// console.log(123);
traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
});
// transformFromAstAsync(ast).then((res) => console.log(res));
console.log(generate);
const output = generate(ast);
console.log(output);
