import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyTopicTemplate } from "@/components/study/StudyTopicTemplate";
import { getStudyTopic } from "@/lib/study-topics";

const SLUG = "kids-english";

export function generateMetadata(): Metadata {
  const topic = getStudyTopic(SLUG);
  if (!topic) return {};
  return {
    title: `${topic.title}｜セブ島で学ぶ`,
    description: topic.shortDescription,
    alternates: { canonical: `/study/${topic.slug}` },
  };
}

export default function Page() {
  const topic = getStudyTopic(SLUG);
  if (!topic) notFound();
  return <StudyTopicTemplate topic={topic} />;
}
