import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);

      return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="group py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-6 px-6 transition-all duration-300">

        {/* Image */}
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={post.image || '/images/default.jpg'}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-900">
            {post.category}
          </span>

          <span>•</span>

          <time>{formatDate(post.date)}</time>

          <span>•</span>

          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-600 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="mt-5 inline-flex items-center text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
          Ler mais →
        </div>
      </article>
    </Link>
  );
}
