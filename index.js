import wasmInit from './pkg/wasm_rust_linear_memory.js';

async function run() {
  const rustWasm = await wasmInit('./pkg/wasm_rust_linear_memory_bg.wasm');
  const bufPtr = rustWasm.get_buffer_pointer();

  // Ask Rust to store a value.
  let index = 0;
  rustWasm.store(index, 19.123);

  // Create a typed array mapped to the Rust buffer.
  let wasmMemory = new Float64Array(rustWasm.memory.buffer, bufPtr, 10);

  // Get value from the JS array.
  console.log('value at index', index, '=', wasmMemory[0]);

  // Store a value in the JS array.
  index = 1;
  wasmMemory[index] = 7.654;

  // Get the value at index 1 of the Rust buffer.
  console.log('value at index', index, '=', rustWasm.read(index));
}

run();
