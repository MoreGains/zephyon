import { add, mul } from "./mathUtils";

async function run() {
  console.log(`2 + 3 = ${add(2,3)}`);
  console.log(`4 * 5 = ${mul(4,5)}`);

  const delayed = await new Promise<string>(res =>
    setTimeout(()=>res("Async complete ✅"), 800)
  );
  console.log(delayed);
}
run();

