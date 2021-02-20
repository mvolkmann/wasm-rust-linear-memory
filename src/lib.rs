use wasm_bindgen::prelude::*;

const BUFFER_SIZE: usize = 10; // but only using first two here

// Create array pre-populated with zero values.
static mut BUFFER: [f64; BUFFER_SIZE] = [0.0; BUFFER_SIZE];

// This just enables writing to the browser DevTools console from Rust.
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn store(index: usize, value: f64) {
    //log(&format!("store0: value = {}", value));
    unsafe {
        BUFFER[index] = value;
        //log(&format!("store0: buffer = {:?}", BUFFER));
    }
}

#[wasm_bindgen]
pub fn get_buffer_pointer() -> *const f64 {
    let pointer: *const f64;
    unsafe {
        pointer = BUFFER.as_ptr();
    }
    pointer
}

#[wasm_bindgen]
pub fn get_buffer_size() -> usize {
    BUFFER_SIZE
}

#[wasm_bindgen]
pub fn read(index: usize) -> f64 {
    let value: f64;
    unsafe {
        //log(&format!("read1: buffer = {:?}", BUFFER));
        value = BUFFER[index];
    }
    //log(&format!("read1: value = {}", value));
    value
}
