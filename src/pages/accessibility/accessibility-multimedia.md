---
layout: home.njk
title: Multimedia Accessibility
tags: ['nav', 'access']
---

There are a number of ways to ensure that multimedia resources in the course are accessible to all. Firstly, determine what the accessibility requirements are for each type of multimedia resource. 

In this document, multimedia refers to:

- videos
- audio files, and
- interactive engagement with course content.

### Considerations

There are a number of considerations when you are intending to include a multimedia resource. Each consideration comes with its own requirements for meeting accessibility standards.

If your multimedia resource includes audio narration or instructions, you will need to provide a complete **transcript** of all spoken content and any relevant non-spoken content in your resource (e.g. a graph or table of information).

If your multimedia resource has synchronised audio within a video, you will need to provide **captions** for all spoken elements that will run inline with the presentation.

If your multimedia resource requires learner interaction, it should be navigable by any learner using only the **keyboard**. Any content available within an interactive activity should be available to learners in another **mode**, for example, as text on screen or as a downloadable transcript.

If your multimedia resource includes contextual visuals like graphs and charts, then the presenter must **describe the details** of the visual materials during the presentation. Any complex graphics should be available for download outside of the multimedia resource as supporting assets, and alternative text and long descriptions used where appropriate.

#### Multimedia treatment by type

<table class="adx styled">
      <caption class="top">Above: A table summarising the accessibility requirement (right-hand column) and its associated inclusion in a multimedia resource (left-hand column).</caption>
      <thead>
          <tr>
              <th class="">Item included in multimedia resource</th>
              <th>Accessibility requirement</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Audio narration or instructions</td>
              <td>Transcript of spoken and relevant non-spoken content</td>
          </tr>
          <tr>
              <td>Synchronised audio in a video</td>
              <td>Captions for spoken elements and a downloadable transcript of spoken content</td>
          </tr>
          <tr>
              <td>Interactive activity</td>
              <td>Available in an alternative mode eg. transcript or text on screen</td>
          </tr>
          <tr>
              <td>Contextual visuals (e.g. graphs and charts) that are not voiced</td>
              <td>Audio descriptions of relevant content throughout presentation and downloadable in an alternative mode</td>
          </tr>
      </tbody>
  </table>

  ### Transcripts

When developing transcripts (or captions) for multimedia objects, it is important to include:

- the speaker's name 
- any spoken content that is relevant to the learning - if there is irrelevant spoken content, it is best to indicate that it has been excluded from the transcript, e.g., “[A & B chatted while slides were loading]”
- any relevant descriptions about the audio elements - for example, “Don’t touch that! [shouted]” or for musical or sound effect audio, “[metal pipes crashing to concrete floor]” or “[soft music playing in background]”, and
- headings and sub-headings for ease of navigation, especially for lengthy transcripts - include these in brackets to indicate that they may not be spoken. For example, “[Introduction]”.

The inclusions listed above can be added during the transcript process, which involves listening to and checking each video transcript so that it accurately reflects the spoken - and visual - content. 

During transcript development, it is important to check that the following things have been added in a consistent way:

- The presenter's name is written in ALL CAPS and followed by a colon (:) - repeat this process for each speaker (if there is more than one in a video).
- Use Australian/UK English spelling - e.g. if there are 'z' words such as 'prioritize,' then change them to the 's' form ('prioritise').
- Write things out in full - for example, write 'for example' not 'e.g.'; 'percent' not '%'; 'Saturday' not 'Sat.'.

#### Captions and third-party videos

Captions in video are important when the learner needs to see and hear information at the same time. If you are not producing your own video resource but are planning to embed video materials from a third-party source (e.g. YouTube), be aware that not all third-party videos include transcripts. 

You should check with the video hosting platform that any closed captions that might be available are turned on, and that you embed the video using a method that supports this feature. For example, YouTube videos embedded using the YouTube embed code will still retain closed caption functionality.

### Describing visuals in a presentation

When referencing complex visuals, graphs or data which is displayed on screen, accessibility guidelines state that it is important to clearly describe the information in words during your multimedia presentation. 

<table class="adx styled">
      <caption class="top">Above: A table summarising the accessibility requirement (right-hand column) and its associated inclusion in a multimedia resource (left-hand column).</caption>
      <thead>
          <tr>
              <th class="">Original text</th>
              <th>Refined text</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>'As you can see, metallurgical coal production increased by three million tonnes over these two years.'</td>
              <td>'This chart illustrates that metallurgical coal production in British Columbia increased from 23 million tonnes in 1999 to 26 million tonnes in 2001.'</td>
          </tr>
      </tbody>
  </table>

#### Explanation

  The refined text describes the visual content in detail. Inclusion of numerical data - including the actual totals for each relevant year - gives the learner a more complete story, which replicates the experience that a learner without visual impairment would have,without seeing the visual.

### Interactive content

The process for any interactive activity is a review of the code itself, ensuring that the creator has included the expected 'alt' tags with human-friendly descriptions, and any interactions have been built using the appropriate HTML semantics which meet the WCAG AA 2.0 standards. 

#### HTML Semantics

Here are two examples of semantic HTML for interactions on a web page. Either of these can be styled as needed. Buttons in particular act as `<div>` elements but with interaction semantics.

1. Anchor `<a></a>`

```html
    <a href="{{ './otherpage.html' | url }}"> Link to another page </a>
```

Used to link to other pages from the current page.

2. Button `<button></button>`

```html
    <button onclick='doThing()'> Show more </button>

```

Used to trigger a change or action on the current page.

  <br>

Using these semantic HTML tags as per the usage examples require no further changes. Where the usage differs (e.g using a `<div>` tag as an interactive element or an `<a>` tag which does not navigate away from the current page), it is recommended that ARIA tags are used to ensure users with accessibility needs can smoothly navigate the interactive.

#### What is ARIA?

Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

ARIA attributes or tags pass information to assistive technologies such as screen readers or keyboard navigation. This information includes descriptions specifically for screen readers, information about what an element may do when interacted with, where there are no visual cues, or to describe relationships between elements on a page. These attributes ensure that those who cannot rely upon visual cues on a page still have an equitable experience.

#### ARIA Examples

A clickable element on the page typically plays one of two roles which align with the semantic uses outlined above. Here are examples of ARIA roles in use in non-standard HTML structures:

1. Link – A link takes users to another page or website, or a new section on the current page. Links are primarily used for navigation. 

```html
    <div onclick=”goToPage()” role=”link”>Link Text</div>
```

2. Button – A button changes something on the current page or triggers a change. Buttons are primarily used when clicking the button causes an action where the current page updates or the user does something.

```html
    <div onclick=”showPopup(1)” role=”button”>Show More Information</div>
```

<br>

#### Interactive transcripts

If you are planning to include a transcript of the interactive experience, you should aim to replicate the flow of information as close as possible to the activity itself. This means including headers and subheaders to demonstrate the depth of information shown throughout the activity.
