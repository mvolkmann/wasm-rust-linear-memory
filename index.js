import wasmInit from './pkg/wasm_rust_linear_memory.js';

async function run() {
  const rustWasm = await wasmInit('./pkg/wasm_rust_linear_memory_bg.wasm');

  // Write to the WASM buffer.
  rustWasm.store0(19);

  // Create a Uint8Array mapped to the WASM buffer.
  let wasmMemory = new Uint8Array(rustWasm.memory.buffer);

  // Get a pointer to the WASM buffer.
  let bufPtr = rustWasm.get_buffer_pointer();

  // Read the value at index zero of the buffer.
  console.log(wasmMemory[bufPtr + 0]); // should log "19"

  // Write to index one of the Uint8Array.
  wasmMemory[bufPtr + 1] = 7;

  // Have WASM read index one of the buffer.
  console.log(rustWasm.read1()); // should log "7"
}

run();
