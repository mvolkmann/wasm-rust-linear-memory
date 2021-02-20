import wasmInit from './pkg/wasm_rust_linear_memory.js';

// Creates a JS typed array mapped to the Rust buffer.
function getJsArray(wasm) {
  const bufPtr = wasm.get_buffer_pointer();
  const bufSize = wasm.get_buffer_size();
  return new Float64Array(wasm.memory.buffer, bufPtr, bufSize);
}

async function run() {
  const wasm = await wasmInit('./pkg/wasm_rust_linear_memory_bg.wasm');
  const jsArray = getJsArray(wasm);

  // Ask Rust to store a value.
  let index = 0;
  wasm.store(index, 19.123);

  // Get value from the JS array.
  console.log('value at index', index, '=', jsArray[0]);

  // Store a value in the JS array.
  index = 1;
  jsArray[index] = 7.654;

  // Ask Rust for the value in its buffer.
  console.log('value at index', index, '=', wasm.read(index));
}

run();
