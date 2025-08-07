// app/[locale]/[...catchAll]/page.tsx
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound();
}
