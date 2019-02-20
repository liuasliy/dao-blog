import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
        <style jsx global>
            {`
            
            html {
                font-family: sans-serif;
                /* 1 */
                -ms-text-size-adjust: 100%;
                /* 2 */
                -webkit-text-size-adjust: 100%;
                /* 2 */
            }
            
          
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            dl,
            dt,
            dd,
            ul,
            ol,
            li,
            div,
            a,
            pre,
            code,
            form,
            fieldset,
            button,
            input,
            textarea,
            p,
            address,
            em,
            label,
            img,
            th,
            td,
            iframe,
            sub,
            sup {
                padding: 0;
                margin: 0
            }
            

            
            audio,
            canvas,
            progress,
            video {
                display: inline-block;
            }
            
            
            /**
             * Add the correct display in iOS 4-7.
             */
            
            audio:not([controls]) {
                display: none;
                height: 0;
            }
            
            
            /**
             * Add the correct vertical alignment in Chrome, Firefox, and Opera.
             */
            
            progress {
                vertical-align: baseline;
            }
            
            
            /**
             * Add the correct display in IE 10-.
             * 1. Add the correct display in IE.
             */
            
            template,
            
            /* 1 */
            
            [hidden] {
                display: none;
            }
            
            
            /* Links
               ========================================================================== */
            
            
            /**
             * 1. Remove the gray background on active links in IE 10.
             * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
             */
            
            a {
                text-decoration: none;
                background-color: transparent;
                /* 1 */
                -webkit-text-decoration-skip: objects;
                /* 2 */
            }
            
            
            /**
             * Remove the outline on focused links when they are also active or hovered
             * in all browsers (opinionated).
             */
            
            a:active,
            a:hover {
                outline-width: 0;
            }
            
            
            /* Text-level semantics
               ========================================================================== */
            
            
            /**
             * 1. Remove the bottom border in Firefox 39-.
             * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
             */
            
            abbr[title] {
                border-bottom: none;
                /* 1 */
                text-decoration: underline;
                /* 2 */
                text-decoration: underline dotted;
                /* 2 */
            }
            
          
            
            b,
            strong {
                font-weight: inherit;
            }
            
            
            /**
             * Add the correct font weight in Chrome, Edge, and Safari.
             */
            
            b,
            strong {
                font-weight: bolder;
            }
            
            
            /**
             * Add the correct font style in Android 4.3-.
             */
            
            dfn {
                font-style: italic;
            }
            
          
            
            h1 {
                font-size: 2em;
                margin: 0.67em 0;
            }
            
          
            
            mark {
                background-color: #ff0;
                color: #000;
            }
            
         
            small {
                font-size: 80%;
            }
            
         
            
            sub,
            sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                vertical-align: baseline;
            }
            
            sub {
                bottom: -0.25em;
            }
            
            sup {
                top: -0.5em;
            }
            
            
            /* Embedded content
               ========================================================================== */
            
            
            /**
             * Remove the border on images inside links in IE 10-.
             */
            
            img {
                border-style: none;
            }
            
            
            /**
             * Hide the overflow in IE.
             */
            
            svg:not(:root) {
                overflow: hidden;
            }
            
            
            /* Grouping content
               ========================================================================== */
            
           
            code,
            kbd,
            pre,
            samp {
                font-family: monospace, monospace;
                /* 1 */
                font-size: 1em;
                /* 2 */
            }
            
            
            /**
             * Add the correct margin in IE 8.
             */
            
            figure {
                margin: 1em 40px;
            }
            
            
            /**
             * 1. Add the correct box sizing in Firefox.
             * 2. Show the overflow in Edge and IE.
             */
            
            hr {
                box-sizing: content-box;
                /* 1 */
                height: 0;
                /* 1 */
                overflow: visible;
                /* 2 */
            }
            
            
            /* Forms
               ========================================================================== */
            
          
            
            button,
            input,
            select,
            textarea {
                font: inherit;
                /* 1 */
                margin: 0;
                /* 2 */
            }
            
            
            /**
             * Restore the font weight unset by the previous rule.
             */
            
            optgroup {
                font-weight: bold;
            }
            
            
            /**
             * Show the overflow in IE.
             * 1. Show the overflow in Edge.
             */
            
            button,
            input {
                /* 1 */
                overflow: visible;
            }
            
            
            /**
             * Remove the inheritance of text transform in Edge, Firefox, and IE.
             * 1. Remove the inheritance of text transform in Firefox.
             */
            
            button,
            select {
                /* 1 */
                text-transform: none;
            }
            
         
            
            button,
            html [type="button"],
            
            /* 1 */
            
            [type="reset"],
            [type="submit"] {
                -webkit-appearance: button;
                /* 2 */
            }
            
            
            /**
             * Remove the inner border and padding in Firefox.
             */
            
            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
                border-style: none;
                padding: 0;
            }
            
            
            /**
             * Restore the focus styles unset by the previous rule.
             */
            
            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
                outline: 1px dotted ButtonText;
            }
            
            
            /**
             * Change the border, margin, and padding in all browsers (opinionated).
             */
            
            fieldset {
                border: 1px solid #c0c0c0;
                margin: 0 2px;
                padding: 0.35em 0.625em 0.75em;
            }
            
          
            
            legend {
                box-sizing: border-box;
                /* 1 */
                color: inherit;
                /* 2 */
                display: table;
                /* 1 */
                max-width: 100%;
                /* 1 */
                padding: 0;
                /* 3 */
                white-space: normal;
                /* 1 */
            }
            
            
            /**
             * Remove the default vertical scrollbar in IE.
             */
            
            textarea {
                overflow: auto;
            }
            
            
            /**
             * 1. Add the correct box sizing in IE 10-.
             * 2. Remove the padding in IE 10-.
             */
            
            [type="checkbox"],
            [type="radio"] {
                box-sizing: border-box;
                /* 1 */
                padding: 0;
                /* 2 */
            }
            
            
            /**
             * Correct the cursor style of increment and decrement buttons in Chrome.
             */
            
            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
                height: auto;
            }
            
            
            /**
             * 1. Correct the odd appearance in Chrome and Safari.
             * 2. Correct the outline style in Safari.
             */
            
            [type="search"] {
                -webkit-appearance: textfield;
                /* 1 */
                outline-offset: -2px;
                /* 2 */
            }
            
            
            /**
             * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
             */
            
            [type="search"]::-webkit-search-cancel-button,
            [type="search"]::-webkit-search-decoration {
                -webkit-appearance: none;
            }
            
            
            /**
             * Correct the text style of placeholders in Chrome, Edge, and Safari.
             */
            
            ::-webkit-input-placeholder {
                color: inherit;
                opacity: 0.54;
            }
            
         
            
            ::-webkit-file-upload-button {
                -webkit-appearance: button;
                /* 1 */
                font: inherit;
                /* 2 */
            }
            
            html {
                font-size: 100px
            }
            
            * {
                box-sizing: border-box;
            }
            
            @media screen and (min-width: 320px) {
                html {
                    font-size: 42.67px
                }
                body {
                    font-size: 12px
                }
            }
            
            @media screen and (min-width: 360px) {
                html {
                    font-size: 48px
                }
                body {
                    font-size: 12px
                }
            }
            
            @media screen and (min-width: 375px) {
                html {
                    font-size: 50px
                }
                body {
                    font-size: 12px
                }
            }
            
            @media screen and (min-width: 384px) {
                html {
                    font-size: 51.2px
                }
                body {
                    font-size: 14px
                }
            }
            
            @media screen and (min-width: 400px) {
                html {
                    font-size: 53.33px
                }
                body {
                    font-size: 14px
                }
            }
            
            @media screen and (min-width: 414px) {
                html {
                    font-size: 55.2px
                }
                body {
                    font-size: 14px
                }
            }
            
            @media screen and (min-width: 424px) {
                html {
                    font-size: 56.53px
                }
                body {
                    font-size: 14px
                }
            }
            
            @media screen and (min-width: 480px) {
                html {
                    font-size: 64px
                }
                body {
                    font-size: 15.36px
                }
            }
            
            @media screen and (min-width: 540px) {
                html {
                    font-size: 72px
                }
                body {
                    font-size: 17.28px
                }
            }
            
            @media screen and (min-width: 720px) {
                html {
                    font-size: 96px
                }
                body {
                    font-size: 23.04px
                }
            }
            
            @media screen and (min-width: 750px) {
                html {
                    font-size: 100px;
                    /* max-width: 750px; */
                    margin: 0 auto
                }
                body {
                    font-size: 24px
                }
            }
            
            body {
                -webkit-overflow-scrolling: touch;
                overflow-x: hidden;
                width: 100%;
                font-family: "Pingfang SC", STHeiti, "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", SimSun, sans-serif;
                font-size: .16rem;
            }
            
            img {
                width: 100%;
                display: block;
            }
            
            .bg {
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
            
            ul,
            li {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            
            /**
             * collapse table-border
             */
            
            table {
                border-collapse: collapse;
                border-spacing: 0
            }
            
            
            /**
             *  De differentiation in all browsers.
             */
            
            div {
                box-sizing: border-box
            }
            
            
            /*滚动条样式自定义*/
            
            ::-webkit-scrollbar {
                width: .08rem;
                height: 1.20rem;
                background-color: transparent;
            }
            
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                border-radius: 10px;
                background-color: transparent;
            }
            
            ::-webkit-scrollbar-thumb {
                width: .08rem;
                height: 1.20rem;
                border-radius: 10px;
                background-color: rgba(0, 0, 0, .3);
                margin-right: .10rem;
            }
            `}
        </style>
    </div>
)

export default Layout