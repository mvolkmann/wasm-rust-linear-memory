import wasmInit from './pkg/wasm_rust_linear_memory.js';

async function run() {
  const rustWasm = await wasmInit('./pkg/wasm_rust_linear_memory_bg.wasm');
  const bufPtr = rustWasm.get_buffer_pointer();

  // Ask Rust to store a value at index 0.
  rustWasm.store0(19.123);

  // Create a typed array mapped to the Rust buffer.
  let wasmMemory = new Float64Array(rustWasm.memory.buffer, bufPtr, 10);

  // Get the value at index 0 of the JS array.
  console.log('first value =', wasmMemory[0]); // should log 19.123

  // Write to index 1 of the JS array.
  wasmMemory[1] = 7.654;

  // Get the value at index 1 of the Rust buffer.
  console.log('second value =', rustWasm.read1()); // should log 7.654
}

run();
