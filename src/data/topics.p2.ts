import type { Topic } from './topic-types';
import { TOPICS_P2A } from './topics.p2a';
import { TOPICS_P2B } from './topics.p2b';
import { TOPICS_P2C } from './topics.p2c';

/** Phase 3 — food, shopping, culture, photography and itinerary topics. */
export const TOPICS_P2: Topic[] = [...TOPICS_P2A, ...TOPICS_P2B, ...TOPICS_P2C];
