import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import Markdown, { Components, Options } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type OrderedListProps = ComponentPropsWithoutRef<'ol'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type StrongProps = ComponentPropsWithoutRef<'strong'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type CodeProps = ComponentPropsWithoutRef<'code'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components: Components | null | undefined = {
  h1({ className, ...props }: HeadingProps) {
    return (
      <h1
        className={clsx(
          'text-secondary-900 text-3xl lg:text-5xl font-bold leading-tight',
          className
        )}
        {...props}
      />
    );
  },
  h2({ className, ...props }: HeadingProps) {
    return (
      <h2
        className={clsx(
          'text-secondary-800 text-2xl lg:text-4xl font-semibold leading-snug',
          className
        )}
        {...props}
      />
    );
  },
  h3({ className, ...props }: HeadingProps) {
    return (
      <h3
        className={clsx('text-xl lg:text-3xl font-medium leading-snug', className)}
        {...props}
      />
    );
  },
  h4({ className, ...props }: HeadingProps) {
    return (
      <h4
        className={clsx('text-lg lg:text-2xl font-medium leading-relaxed', className)}
        {...props}
      />
    );
  },
  h5({ className, ...props }: HeadingProps) {
    return (
      <h5
        className={clsx('text-base lg:text-xl font-medium leading-relaxed', className)}
        {...props}
      />
    );
  },
  h6({ className, ...props }: HeadingProps) {
    return (
      <h6
        className={clsx('text-sm lg:text-lg font-medium leading-normal', className)}
        {...props}
      />
    );
  },
  p({ className, ...props }: ParagraphProps) {
    return (
      <p
        className={clsx('text-base lg:text-lg leading-relaxed', className)}
        {...props}
      />
    );
  },
  em({ className, ...props }: ComponentPropsWithoutRef<'em'>) {
    return (
      <em
        className={clsx('text-4xl', className)}
        {...props}
      />
    );
  },
  small({ className, ...props }: ComponentPropsWithoutRef<'em'>) {
    return (
      <small
        className={clsx('text-xs lg:text-sm text-gray-500', className)}
        {...props}
      />
    );
  },
  ul({ className, ...props }: ListProps) {
    return (
      <ul
        className={clsx('text-base lg:text-lg list-disc list-inside', className)}
        {...props}
      />
    );
  },
  ol({ className, ...props }: OrderedListProps) {
    return (
      <ol
        className={clsx('text-base lg:text-lg list-decimal list-inside', className)}
        {...props}
      />
    );
  },
  li({ className, ...props }: ListItemProps) {
    return (
      <li
        className={clsx('text-base lg:text-lg leading-relaxed ltr:pl-4 rtl:pr-4', className)}
        {...props}
      />
    );
  },
  a({ href, className, ...props }: AnchorProps) {
    const classNames = clsx(
      'text-base lg:text-lg text-blue-600 hover:text-blue-500 underline',
      className
    );
    if (href?.startsWith('/')) {
      return (
        <Link
          href={href}
          className={classNames}
          {...props}
        />
      );
    } else if (href?.startsWith('#')) {
      return (
        <a
          target="_blank"
          href={href}
          className={classNames}
          {...props}
        />
      );
    }
    return (
      <a
        target="_blank"
        className={classNames}
      />
    );
  },
  strong({ className, ...props }: StrongProps) {
    return (
      <strong
        className={clsx('text-base lg:text-lg font-semibold text-secondary-900', className)}
        {...props}
      />
    );
  },
  code(props: CodeProps) {
    const { children, className, ...rest } = props;
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={match[1]}
        style={oneDark}
        customStyle={{ direction: 'ltr', position: 'relative' }}
        showLineNumbers
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code
        {...rest}
        dir="ltr"
        className={clsx('text-sm lg:text-base font-mono bg-gray-100 px-2 py-1 rounded', className)}
      >
        {children}
      </code>
    );
  },
  blockquote({ className, ...props }: BlockquoteProps) {
    return (
      <blockquote
        className={clsx(
          'text-lg lg:text-xl italic ltr:border-l-4 rtl:border-r-4 border-secondary-400 ltr:pl-4 rtl:pr-4',
          className
        )}
        {...props}
      />
    );
  },
};

export function MarkdownContent(props: Options) {
  return (
    <Markdown
      {...props}
      components={components}
      rehypePlugins={[rehypeRaw]}
    />
  );
}
