# Test Assignment — **f-tag-input**

---

## 0. Before You Start
1. **Read our three convention docs carefully**  
   * **Naming convention** → <https://docs.google.com/document/d/1dC3ST86ACfWf5F-LHbL2PhYHjXiLNzP0qovYvlWLAJw/edit#heading=h.lyi10hh15in2>  
   * **HTML structure & methodology** → <https://docs.google.com/document/d/1_-I93DL8gHSHyVbPq-mLlw1EPoQmZocYDnj-wgaba14/edit#heading=h.fkms7de14o0f>  
   * **SCSS & CSS-variable guidelines** → <https://docs.google.com/document/d/1EDzgD9ws7nV9hBU8binxQY2PgoQ0Wl013HG6aMzRFM4/edit#heading=h.51jvmju5ha1k>  
2. **Every** class of component(except utility classes as `d-flex`), modifier, helper and JS hook should follow those rules (`f-`, `__element`, `--modifier`, `js-`).

---

## 1. UI Mock-up
Refer to the latest image with tags and “×” icons.  

* Colors / border-radius → via **SCSS `!default` variables** and **CSS custom properties**.  
* Font → system stack (`font-family: system-ui, sans-serif`).

---

## 2. Layout Requirements

| Item        | Details                                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------------------|
| **Container** | Centered **horizontally & vertically** in the viewport.                                                  |
| **Width**     | `800 px` by default; shrinks fluidly with outer paddings when viewport `< 800 px`.                       |
| **Height**    | If viewport height \< content height → show scrollbar (`overflow: auto`).                                |
| **Background**| Light-blue backdrop, as in the mock-up.                                                                  |

---

## 3. Functionality (JavaScript)

1. **Add tag** – press **Enter** inside the input → create a new tag.  
2. **Toggle active** – click a tag → add / remove class `f-tag-input__tag--active`.  
3. **Delete** – click “×” inside a tag → remove that tag. Every chip **must** include a “×” button.  

**Validation:** ignore empty strings and duplicates.

---

## 4. Tech Stack & Constraints

| Area        | Requirements                                                                                                                                                                              |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **HTML**    | Single demo page `index.html`.                                                                                                                                                            |
| **SCSS**    | Provide the **original SCSS** (not just compiled CSS). Compile however you like (npm scripts, Vite, Dart Sass CLI, …).                                                                    |
| **JavaScript** | Just JS, no jQuery etc.                                                                                                                                        |
| **Bootstrap**  | **Do not import Bootstrap.** If you need a utility class (e.g. `d-flex`) **copy its exact rule** from BS 5.3 docs into `_utilities.scss` and use the class:  ```scss\n.d-flex { display: flex !important; }\n``` |
