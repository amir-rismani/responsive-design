# Responsive Web Design

Mastering responsive web design

## Tips

### Basic HTML and CSS

- The HTML5 specification encourages web developers to use the `UTF-8` character set. `UTF-8` covers almost all of the characters and symbols in the world!
- The `http-equiv=”X-UA-Compatible”` tag is only relevant for Internet Explorer. All modern browsers, including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge, will simply ignore this tag. However, it’s a good practice to include this tag in web projects that might still need to support older systems.
- The viewport is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen. This gives the browser instructions on how to control the page's dimensions and scaling.
- The term `HTML Entity` is used as a synonym for a character reference — a pattern of characters that can represent another character in the HTML. For example, `&lt;` is used to represent the less-than symbol (`<`) in HTML content.
- The `object-fit` CSS property sets how the content of a replaced element, such as an <`img`> or <`video`>, should be resized to fit its container.
- The `border-collapse` CSS property sets whether cells inside a `<`table`> have shared or separate borders.
- HTML (`HyperText Markup Language`) elements historically were categorized as either **"block-level" elements** or **"inline" elements**. As a presentational characteristic, this is now specified by CSS. The paragraph (`<p>`) elements are block-level by default. That is why they are displayed in block layout.
- Semantic elements clearly describes its meaning to both the browser and the developer. Search engines will consider its contents as important keywords to influence the page's search rankings.
- The <`em`> element is for words that have a **stressed emphasis** compared to surrounding text, which is often limited to a word or words of a sentence and affects the **meaning of the sentence** itself.
- The <`strong`> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
- The <`article`> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
- The <`figure`> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <`figcaption`> element. The figure, its caption, and its contents are referenced as a single unit.
- The <`header`> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
- The <`main`> HTML element represents the dominant content of the <`body`> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. A document mustn't have more than one <`main`> element that doesn't have the hidden attribute specified.
- The <`footer`> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <`footer`> typically contains information about the author of the section, copyright data or links to related documents.
- The <`nav`> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
  -The <`section`> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
- If the contents of the element represent a standalone, atomic unit of content that makes sense syndicated as a standalone piece (e.g. a blog post or blog comment, or a newspaper article), the <`article`> element would be a better choice.

### Basic concepts of CSS

- **Separation of Concerns (SoC):** is the idea that computer programs should be separated into distinct sections that deal with a single feature or behavior. The simplest example of all is HTML, CSS and JavaScript. As the diagram below shows, each language has it’s different sections or concerns of a website.
  - **HTML:** it is used for the content and structure of the website.
  - **CSS:** it is used for the styling of the website.
  - **JavaScript:** it is used to define the behavior.
  - Each section needs to be placed in a separate file.
- **Relational Selector:** A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

  - **Descendant combinator (space):** The descendant combinator matches all elements that are descendants of a specified element.
  - **Child combinator (>):** The child combinator selects all elements that are the children of a specified element.
  - **Next sibling combinator (+):** The next sibling combinator is used to select an element that is directly after another specific element.
  - **Subsequent-sibling combinator (~):** The subsequent-sibling combinator selects all elements that are next siblings of a specified element.

- **Pseudo-classes:** A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). [Click to access the **pseudo-classes** reference...](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

- **Pseudo-elements:** A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). [Click to access the **pseudo-element** reference...](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

- **Selector Specificity:** Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. The specificity algorithm calculates the weight of a CSS selector to determine which rule from competing CSS declarations gets applied to an element. Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration. [Click to access the **selector specificity weight** reference...](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#selector_weight_categories).

- **Inheritance:** In CSS, inheritance controls what happens when no value is specified for a property on an element. CSS properties can be categorized in two types:
  - inherited properties, which by default are set to the `computed value` of the parent element
  - non-inherited properties, which by default are set to `initial value` of the property
