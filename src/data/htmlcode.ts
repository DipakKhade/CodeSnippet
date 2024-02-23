export const htmlcode = [
  {
    heading: "html Boilerplate",
    desc: "",
    code: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          
      </body>
      </html>`,
  },
  {
    heading: "headings",
    code: `      <h1>This is a Heading 1</h1>
      <h2>This is a Heading 2</h2>
      <h3>This is a Heading 3</h3>
      <h4>This is a Heading 4</h4>
      <h5>This is a Heading 5</h5>
      <h6>This is a Heading 6</h6>
  `,
  },
  {
    heading: "paragraph",
    code: `<p>This is a paragraph.</p>`,
  },
  {
    heading: "link",
    code: `<a href="https://dipakkhade-dev.vercel.app/">Link Text</a>`,
  },
  {
    heading: "image",
    code: `<img src="image.jpg" alt="Image Description">`,
  },
  {
    heading: "unordered list",
    code: ` <ul>
      <li>Unordered List Item 1</li>
      <li>Unordered List Item 2</li>
      <li>Unordered List Item 3</li>
  </ul>`,
  },
  {
    heading: "ordered list",
    code: ` <ol>
      <li>Ordered List Item 1</li>
      <li>Ordered List Item 2</li>
      <li>Ordered List Item 3</li>
  </ol>
`,
  },
  {
    heading: "table",
    code: ` <table border="1">
      <thead>
          <tr>
              <th>Header 1</th>
              <th>Header 2</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Data 1</td>
              <td>Data 2</td>
          </tr>
          <tr>
              <td>Data 3</td>
              <td>Data 4</td>
          </tr>
      </tbody>
  </table>`,
  },
  {
    heading: "table",
    code: ` <form action="/submit" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Submit">
  </form>`,
  },
  {
    heading: "button",
    code: ` <button type="button">Click Me</button>`,
  },
  {
    heading: "radio button",
    code: `<label for="option1">Option 1</label>
      <input type="radio" id="option1" name="options" value="option1">
      <label for="option2">Option 2</label>
      <input type="radio" id="option2" name="options" value="option2">

      <label for="option3">Option 3</label>
      <input type="radio" id="option3" name="options" value="option3">`,
  },
  {
    heading: "video",
    code: `<video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>
`,
  },
  {
    heading: "audio",
    code: `<audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>`,
  },
  {
    heading: "HTML entities",
    code: `&lt; - Less than (<)
      &gt; - Greater than (>)
      &amp; - Ampersand (&)
      &quot; - Double quotation mark (")
      &apos; - Single quotation mark (')
      &cent; - Cent (¢)
      &pound; - Pound (£)
      &yen; - Yen (¥)
      &euro; - Euro (€)
      &copy; - Copyright symbol (©)
      &reg; - Registered trademark symbol (®)
      &trade; - Trademark symbol (™)
      &sect; - Section symbol (§)
      &para; - Paragraph symbol (¶)
      &deg; - Degree symbol (°)
      &times; - Multiplication symbol (×)
      &divide; - Division symbol (÷)
      &nbsp; - Non-breaking space
      &shy; - Soft hyphen
      &mdash; - Em dash (—)
      &ndash; - En dash (–)
      &hellip; - Horizontal ellipsis (…)
      &laquo; - Left-pointing double angle quotation mark («)
      &raquo; - Right-pointing double angle quotation mark (»)
      &bull; - Bullet (•)
      &trade; - Trademark symbol (™)
      &copy; - Copyright symbol (©)
      &reg; - Registered trademark symbol (®)
      `,
  },
];
