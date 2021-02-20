# wasm-rust-linear-memory

This demonstrates sharing memory between Rust and JavaScript using WASM.

The steps followed to create this were:

1. Create the project with
   `cargo new --lib wasm-rust-linear-memory`

1. Modify `Cargo.toml` to contain:

   ```toml
   [lib]
   crate-type = ["cdylib"]

   [dependencies]
   wasm-bindgen = "0.2.70"
   ```

1. Modify `src/lib.rs`

1. Build the project with `wasm-pack build --target web`

1. Create `index.js`

1. Create `index.html`

To run this:

1. Start a local HTTP file server.
   One approach is to install [Deno](https://deno.land/)
   and then enter these commands:

   ```bash
   deno install --allow-net --allow-read https://deno.land/std@0.87.0/http/file_server.ts
   file_server .
   ```

1. Browse localhost:{port} where port is
   the port on which the local server is listening.

1. See the output in the DevTools console.
