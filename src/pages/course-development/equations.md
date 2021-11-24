---
layout: home.njk
title: Equations and code
tags: ['nav', 'style']
---

### Equations

The default equation tool in Canvas adds equations as LaTex (as a JPG file) to the page. Unfortunately, the alt tag that comes with the LaTex is not written in a MathSpeak language, meaning that it is not adequate for screen readers and therefore, not accessible.

It should be noted that the best case solution for adding equations to the course, is where the Academic or SME provides both the LaTex code along with the full MathSpeak text in the course storyboard. This is for 2 reasons:

So that during any video recording or transcript creation, the correct language can be used, and
So that during course build (HTML), both the LaTex and corresponding MathSpeak can be added to the page, both image and alt text.

In circumstances where either LaTex or MathSpeak (or both) are not provided, the following toolbars may be used to assist in the creation of web assets for Canvas.

WIRIS provide a number of [tools at this website](http://www.wiris.com/editor/demo/en/developers) which can be used to convert different equations to various web formats, including into Nemeth MathSpeak.

The tool titled [“With accessibility features that make mathematics available to users with different disabilities”](http://www.wiris.com/editor/demo/en/developers#accessibility) can be used to create accessible alt text for your equations. Either by copy and pasting the LaTex code into the editor, or by creating the code itself via keyboard or even writing with the “pen” tool.

Audio of the transcript can be heard using the “Talk!” button, and the accessible text (rendered in English) can be copy and pasted into the alt text in the course.

<img src="{{ '/assets/images/equations.png' | url }}" alt="WIRIS accessible equations tool screenshot" width="100%">

### Code markup

**Note:** Code markup has become more complex in the new Rich Content Editor  in Canvas.

Pieces of code should be inserted into Canvas with syntax highlighting where available, in a monospaced font, and distinct to regular learning content.

Canvas no longer supports a native code insertion function and now we recommend writing any code in a code editor and pasting the result into the Canvas rich text editor. We currently use Prism.js
inserted into the MyUni theme which will automatically style code syntax highlighting for the following languages:

- C
- C#
- C++
- CSS
- F#
- HTML/XML
- Java
- JavaScript
- LESS
- PHP
- Processing
- Python
- Ruby
- Markdown

After pasting in your code, Canvas will automatically convert the `< >` symbols into text symbols. Format the text as both `pre` and `code` in the editor. To enable syntax highlighting, add in a class to the `pre` tag in Canvas:

```html
    <pre class="language-LANGUAGENAME">
        <code>
            &lt;p&gt;Hello World!&lt;/p&gt;
        </code>
    </pre>
```

Where `LANGUAGENAME` corresponds to a language name from the list above in lowercase (e.g. `language-html`).

To prevent Canvas formatting the code into one single line and to preserve line breaks and spacing, ensure you copy and paste the code straight into the Canvas editor and *then* apply the classes after.
