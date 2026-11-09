import type { Locale, Topic, TopicGroup } from './topic-types';
import { GROUP_ORDER } from './topic-types';
import { TOPICS_P0 } from './topics.p0';
import { TOPICS_P1 } from './topics.p1';
import { TOPICS_P2 } from './topics.p2';

/** One entry per original topic. Translations are separate URLs, never counted here. */
export const TOPICS: Topic[] = [...TOPICS_P0, ...TOPICS_P1, ...TOPICS_P2];

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

const bySlug = new Map(TOPICS.map((t) => [t.slug, t]));

export function getTopic(slug: string): Topic | undefined {
  return bySlug.get(slug);
}

/** English lives under /en/, Urdu is the default locale at the root. */
export function topicPath(locale: Locale, slug: string): string {
  return locale === 'en' ? `/en/${slug}/` : `/${slug}/`;
}

export function topicAlternates(site: URL | string, slug: string) {
  const base = typeof site === 'string' ? new URL(site) : site;
  return [
    { hreflang: 'en', href: new URL(topicPath('en', slug), base).toString() },
    { hreflang: 'ur', href: new URL(topicPath('ur', slug), base).toString() },
    // Keeps x-default consistent with the homepages, which point at the Urdu root.
    { hreflang: 'x-default', href: new URL(topicPath('ur', slug), base).toString() }
  ];
}

export function topicsByGroup(): { group: TopicGroup; topics: Topic[] }[] {
  return GROUP_ORDER.map((group) => ({
    group,
    topics: TOPICS.filter((t) => t.group === group)
  })).filter((entry) => entry.topics.length > 0);
}

/** Only links that resolve to a published topic; keeps the cluster free of dead links. */
export function relatedTopics(topic: Topic): Topic[] {
  return topic.related
    .map((slug) => getTopic(slug))
    .filter((t): t is Topic => Boolean(t));
}

export function topicPhaseCounts() {
  return {
    P0: TOPICS.filter((t) => t.phase === 'P0').length,
    P1: TOPICS.filter((t) => t.phase === 'P1').length,
    P2: TOPICS.filter((t) => t.phase === 'P2').length,
    total: TOPICS.length
  };
}
