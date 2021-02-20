use wasm_bindgen::prelude::*;

const BUFFER_SIZE: usize = 2;

static mut BUFFER: [u8; BUFFER_SIZE] = [0; BUFFER_SIZE];

#[wasm_bindgen]
pub fn store0(value: u8) {
    unsafe {
        BUFFER[0] = value;
    }
}

#[wasm_bindgen]
pub fn get_buffer_pointer() -> *const u8 {
    let pointer: *const u8;
    unsafe {
        pointer = BUFFER.as_ptr();
    }
    pointer
}

#[wasm_bindgen]
pub fn read1() -> u8 {
    let value: u8;
    unsafe {
        value = BUFFER[1];
    }
    value
}
