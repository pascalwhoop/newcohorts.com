import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
