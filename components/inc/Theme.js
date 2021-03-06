const DarkTheme = () => {
  return (
    <style jsx global>
      {`
        .hljs {
          display: block;
          overflow-x: auto;
          padding: 0.5em;
          color: #ffffff;
          background: #1c1b1b;
        }

        .hljs-comment {
          color: #999999;
        }

        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-meta-keyword,
        .hljs-doctag,
        .hljs-section,
        .hljs-selector-class,
        .hljs-meta,
        .hljs-selector-pseudo,
        .hljs-attr {
          color: #88aece;
        }

        .hljs-attribute {
          color: v#c59bc1;
        }

        .hljs-name,
        .hljs-type,
        .hljs-number,
        .hljs-selector-id,
        .hljs-quote,
        .hljs-template-tag,
        .hljs-built_in,
        .hljs-title,
        .hljs-literal {
          color: #f08d49;
        }

        .hljs-string,
        .hljs-regexp,
        .hljs-symbol,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-link,
        .hljs-selector-attr,
        .hljs-meta-string {
          color: #b5bd68;
        }

        .hljs-bullet,
        .hljs-code {
          color: #cccccc;
        }

        .hljs-deletion {
          color: #de7176;
        }

        .hljs-addition {
          color: #76c490;
        }

        .hljs-emphasis {
          font-style: italic;
        }

        .hljs-strong {
          font-weight: bold;
        }
      `}
    </style>
  )
}

const LightTheme = () => {
  return (
    <style jsx global>
      {`
        .hljs {
          display: block;
          overflow-x: auto;
          padding: 0.5em;
          color: #2f3337;
          background: #f6f6f6;
        }

        .hljs-comment {
          color: #656e77;
        }

        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-meta-keyword,
        .hljs-doctag,
        .hljs-section,
        .hljs-selector-class,
        .hljs-meta,
        .hljs-selector-pseudo,
        .hljs-attr {
          color: #015692;
        }

        .hljs-attribute {
          color: #803378;
        }

        .hljs-name,
        .hljs-type,
        .hljs-number,
        .hljs-selector-id,
        .hljs-quote,
        .hljs-template-tag,
        .hljs-built_in,
        .hljs-title,
        .hljs-literal {
          color: #b75501;
        }

        .hljs-string,
        .hljs-regexp,
        .hljs-symbol,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-link,
        .hljs-selector-attr,
        .hljs-meta-string {
          color: #54790d;
        }

        .hljs-bullet,
        .hljs-code {
          color: #535a60;
        }

        .hljs-deletion {
          color: #c02d2e;
        }

        .hljs-addition {
          color: #2f6f44;
        }

        .hljs-emphasis {
          font-style: italic;
        }

        .hljs-strong {
          font-weight: bold;
        }
      `}
    </style>
  )
}

export default function Theme({ theme }) {
  if (theme === 'dark') {
    return <DarkTheme />
  }
  return <LightTheme />
}
