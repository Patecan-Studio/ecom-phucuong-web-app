interface Props {
  children: string;
}
const MarkdownWrapper = ({ children }: Props) => {
  return <div dangerouslySetInnerHTML={{__html: children}}></div>
};

export default MarkdownWrapper;
