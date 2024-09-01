# blacksun1-quotes

## 2.0.0

### Major Changes

-   89e574e: Change of exporting interface from pure Common JS to a dual ESM and Common JS ES 5 interface.

    ### Breaking Change

    Change interface as follows:

    ```js
    const quotes = require('blacksun1-quotes');
    ```

    to

    ```js
    const { quotes } = require('blacksun1-quotes');
    ```

    or

    ```typescript
    import { quotes } from 'blacksun1-quotes';
    ```
